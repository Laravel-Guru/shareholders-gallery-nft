import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
//import * as THREE from "three";
// import Countdown from '../countdown/countdown';
import VideoPlayer from '../videojs/videoJS';
import poster from '../../assets/videos/poster.png';
import video from '../../assets/videos/landing.mp4';

//const OrbitControls = require("three-orbitcontrols");

class MainSlider extends Component {
  componentDidMount() {
    // var SEPARATION = 200;
    // var AMOUNTX = 30;
    // var AMOUNTY = 30;
    // var mouseX = 100;
    // var mouseY = -550;
    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 4500);
    // camera.position.z = 1000;
    // var renderer = new THREE.WebGLRenderer({ alpha: true });
    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // this.controls = new OrbitControls(camera, renderer.domElement);
    // this.mount.appendChild(renderer.domElement);
    // var material = new THREE.SpriteMaterial({
    //   color: 0xffffff,
    // });
    // var particles = [];
    // var particle;
    // var count = 0;
    // var i = 0;

    // for (var ix = 0; ix < AMOUNTX; ix++) {

    //   for (var iy = 0; iy < AMOUNTY; iy++) {

    //     particle = particles[i++] = new THREE.Sprite(material);
    //     particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
    //     particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
    //     scene.add(particle);

    //   }

    // }
    // var animate = function () {
    //   requestAnimationFrame(animate);

    //   camera.position.x += (mouseX - camera.position.x) * .05;
    //   camera.position.y += (- mouseY - camera.position.y) * .05;
    //   camera.lookAt(scene.position);

    //   var i = 0;

    //   for (var ix = 0; ix < AMOUNTX; ix++) {

    //     for (var iy = 0; iy < AMOUNTY; iy++) {

    //       particle = particles[i++];
    //       particle.position.y = (Math.sin((ix + count) * 0.3) * 50) +
    //         (Math.sin((iy + count) * 0.5) * 50);
    //       particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 3 +
    //         (Math.sin((iy + count) * 0.5) + 1) * 3;

    //     }

    //   }
    //   renderer.render(scene, camera);
    //   count += 0.1;
    // };
    // animate();
  }
  componentWillUnmount() {
    //this.controls.dispose();
  }
  render() {
    const data = [
      {
        title: "PRE-SALE HAS BEGUN",
        btn1: 'MINT',
        btn2: 'CREDIT CARD'
      },
      // {
      //   title: "LAUNCHING",
      //   btn1: 'Become a Whitelist!',
      //   // btn2: 'Become a Whitelist!'
      // },
      // {
      //   title: "LAUNCHING",
      //   btn1: 'Become a Whitelist!',
      //   // btn2: 'Become a Whitelist!'
      // },
    ]
    const Items = data.map((obj, i) => (
      <div className="item" key={i}>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} className="col-xs-12">
              <div className="slider-content">
                <h2 className="text-primary">{obj.title}</h2>
                
                {/* <p className="text-primary">December 28th 2021</p> */}
                {/* <ul>
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
              </ul> */}
              </div>
            </Col>
            {/* <Col lg={6} md={6} sm={12} className="col-xs-12">
              <Countdown timeTillDate="0" timeFormat="YYYY-MM-DTHH:mm:ss" />
            </Col> */}
            <Col lg={3} md={3} sm={12} className="col-xs-12">
              <div className='btn_top_fold_arrow'>
                <div className="center">
                  <div className='arrow'>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={3} sm={12} className="col-xs-12">
              <div className="btn_top_fold_wrapper">
                <div className="center">
                  <Link to="nft-sale" className="btn2" >{obj.btn1}</Link>
                  <a href="https://shareholdersgallerynft.com/2nd_step" target="_blank" className="btn2" >{obj.btn2}</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    ));
    const videoJsOptions = {
      poster: `${poster}`,
      aspectRatio: "16:9",
      // fluid: true,
      // responsive: true,
      // breakpoints: {
      //   tiny: 300,
      //   xsmall: 400,
      //   small: 500,
      //   medium: 600,
      //   large: 700,
      //   xlarge: 800,
      //   huge: 900
      // },
      autoplay: false,
      controls: true,
      sources: [{
        src: `${video}`,
        type: 'video/mp4'
      }]
    }
    
    return (
      <div className="slider-area">
        {/* <div ref={mount => {
          this.mount = mount;
        }}>
        </div> */}
        <section className="landing-video-area section pt-0">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="videos-heding">
                  <div className="videos-box border border-6 border-primary">
                    <VideoPlayer { ...videoJsOptions } />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <div style={{marginTop: "200px"}}> */}
        
        
        <div className="carousel bg-white">
          <Slider autoplay duration={3000} >
            {Items}
          </Slider>
        </div>

        <div className="horizon-divider bg-secondary" style={{ height: '25px' }}></div>
      </div>
    );
  }
}

export default MainSlider;