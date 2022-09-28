import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import media1 from '../../assets/images/media/1.png';
import media2 from '../../assets/images/media/2.png';
import media3 from '../../assets/images/media/3.png';
import media4 from '../../assets/images/media/4.png';
import media5 from '../../assets/images/media/5.png';
import media6 from '../../assets/images/media/6.png';
import media7 from '../../assets/images/media/7.png';
import media8 from '../../assets/images/media/8.png';

class PressMedia extends Component {
  render() {
    let itemsAni = (
      <ul>
        <li><Link to="#"><img src={media1} alt="press & media" /></Link></li>
        <li><Link to="#"><img src={media2} alt="press & media" /></Link></li>
        <li><Link to="#"><img src={media3} alt="press & media" /></Link></li>
        <li><Link to="#"><img src={media4} alt="press & media" /></Link></li>
        <li><Link to="#"><img src={media5} alt="press & media" /></Link></li>
        <li><Link to="#"><img src={media6} alt="press & media" /></Link></li>
        <li><Link to="#"><img src={media7} alt="press & media" /></Link></li>
        <li><Link to="#"><img src={media8} alt="press & media" /></Link></li>
      </ul>
    )
    if (this.props.animate) {
      itemsAni = (
        <ul>
          <ReactWOW animation={this.props.animate} duration="1.3s">
            <li><Link to="#"><img src={media1} alt="press & media" /></Link></li>
          </ReactWOW>
          <ReactWOW animation={this.props.animate} duration="1.6s">
            <li><Link to="#"><img src={media2} alt="press & media" /></Link></li>
          </ReactWOW>
          <ReactWOW animation={this.props.animate} duration="1.9s">
            <li><Link to="#"><img src={media3} alt="press & media" /></Link></li>
          </ReactWOW>
          <ReactWOW animation={this.props.animate} duration="2.1s">
            <li><Link to="#"><img src={media4} alt="press & media" /></Link></li>
          </ReactWOW>
          <ReactWOW animation={this.props.animate} duration="2.4s">
            <li><Link to="#"><img src={media5} alt="press & media" /></Link></li>
          </ReactWOW>
          <ReactWOW animation={this.props.animate} duration="2.7s">
            <li><Link to="#"><img src={media6} alt="press & media" /></Link></li>
          </ReactWOW>
          <ReactWOW animation={this.props.animate} duration="2.7s">
            <li><Link to="#"><img src={media7} alt="press & media" /></Link></li>
          </ReactWOW>
          <ReactWOW animation={this.props.animate} duration="2.7s">
            <li><Link to="#"><img src={media8} alt="press & media" /></Link></li>
          </ReactWOW>
        </ul>
      )
    }
    return (
      <section className="media-area section">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="section-heading">
                {
                  this.props.animate ?
                    (
                      <ReactWOW animation={this.props.animate} duration="1s">
                        <h2>Press (Media)</h2>
                      </ReactWOW>
                    ) : (
                      <h2>Press (Media)</h2>
                    )
                }
              </div>
            </Col>
            <Col lg={8} md={8} sm={12} className="col-xs-12 col-lg-offset-2 col-md-offset-2">
              <div className="mediabrand">
                {itemsAni}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PressMedia;