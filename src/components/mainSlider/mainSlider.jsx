import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import * as THREE from "three";
import Countdown from '../countdown/countdown';


const OrbitControls = require("three-orbitcontrols");

class MainSlider extends Component {
  componentDidMount() {
    var SEPARATION = 200;
    var AMOUNTX = 30;
    var AMOUNTY = 30;
    var mouseX = 100;
    var mouseY = -550;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 4500);
    camera.position.z = 1000;
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.controls = new OrbitControls(camera, renderer.domElement);
    this.mount.appendChild(renderer.domElement);
    var material = new THREE.SpriteMaterial({
      color: 0xffffff,
    });
    var particles = [];
    var particle;
    var count = 0;
    var i = 0;

    for (var ix = 0; ix < AMOUNTX; ix++) {

      for (var iy = 0; iy < AMOUNTY; iy++) {

        particle = particles[i++] = new THREE.Sprite(material);
        particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
        scene.add(particle);

      }

    }
    var animate = function () {
      requestAnimationFrame(animate);

      camera.position.x += (mouseX - camera.position.x) * .05;
      camera.position.y += (- mouseY - camera.position.y) * .05;
      camera.lookAt(scene.position);

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {

        for (var iy = 0; iy < AMOUNTY; iy++) {

          particle = particles[i++];
          particle.position.y = (Math.sin((ix + count) * 0.3) * 50) +
            (Math.sin((iy + count) * 0.5) * 50);
          particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 3 +
            (Math.sin((iy + count) * 0.5) + 1) * 3;

        }

      }
      renderer.render(scene, camera);
      count += 0.1;
    };
    animate();
  }
  componentWillUnmount() {
    this.controls.dispose();
  }
  render() {
    const data = [
      {
        title: "KILLER CUBS - DApp for Amazing NFT sales",
        btn1: 'Road Map',
        btn2: 'Become a Whitelist!'
      },
      {
        title: "Collection of 9,000 Chimp NFTs—Unique Digital Collectibles",
        btn1: 'FEATURES',
        btn2: 'Coming Soon!'
      },
      {
        title: "Double as your Yacht Club membership card, and Grants Access to Members-Only Benefits",
        btn1: 'Phases',
        btn2: 'Coming Soon!'
      },
    ]
    const Items = data.map((obj, i) => (
      <div className="item" key={i}>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} className="col-xs-12">
              <div className="slider-content">
                <ul>
                  <li className="slider_social_icon1">
                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                  </li>
                  <li className="slider_social_icon2">
                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                  </li>
                  <li className="slider_social_icon3">
                    <Link to="#"><i className="fa fa-send-o"></i></Link>
                  </li>
                  <li className="slider_social_icon4">
                    <Link to="#"><i className="fa fa-bitcoin"></i></Link>
                  </li>
                  <li className="slider_social_icon5">
                    <Link to="#"><i className="fa fa-envelope"></i></Link>
                  </li>
                </ul>
                <h2>{obj.title}</h2>
                <div className="buttons">
                  <Link to="#" className="btn1" >{obj.btn1}</Link>
                  <Link to="#" className="btn2" >{obj.btn2}</Link>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="col-xs-12 hidden-xs hidden-sm">
              <Countdown timeTillDate="12 30 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
            </Col>
          </Row>
        </Container>
      </div >
    ))
    return (
      <div className="slider-area">
        <div ref={mount => {
          this.mount = mount;
        }}></div>
        <div className="carousel">
          <Slider autoplay duration={3000} >
            {Items}
          </Slider>
        </div>

      </div>
    );
  }
}

export default MainSlider;