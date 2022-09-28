import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

class Subscribe extends Component {
  render() {
    let contents = (
      <div className="con">
        <h2>Subscribe to us!</h2>
        <ul>
          <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
          <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
          <li><Link to="#"><i className="fa fa-send-o"></i></Link></li>
          <li><Link to="#"><i className="fa fa-bitcoin"></i></Link></li>
          <li><Link to="#"><i className="fa fa-envelope"></i></Link></li>
        </ul>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="search_btm">
              <div className="search_main">
                <form onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="enter your email address" />
                  <button type="submit">subscribe</button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
    if (this.props.animate) {
      contents = (
        <div className="con">
          <ReactWOW animation={this.props.animate} duration="1s">
            <h2>Subscribe to us!</h2>
          </ReactWOW>
          <ul>
            <ReactWOW animation={this.props.animate} duration="1.3s">
              <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
            </ReactWOW>
            <ReactWOW animation={this.props.animate} duration="1.5s">
              <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
            </ReactWOW>
            <ReactWOW animation={this.props.animate} duration="1.9s">
              <li><Link to="#"><i className="fa fa-send-o"></i></Link></li>
            </ReactWOW>
            <ReactWOW animation={this.props.animate} duration="2.1s">
              <li><Link to="#"><i className="fa fa-bitcoin"></i></Link></li>
            </ReactWOW>
            <ReactWOW animation={this.props.animate} duration="2.4s">
              <li><Link to="#"><i className="fa fa-envelope"></i></Link></li>
            </ReactWOW>
          </ul>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="search_btm">
                <ReactWOW animation={this.props.animate} duration="2.6s">
                  <div className="search_main">
                    <form onSubmit={e => e.preventDefault()}>
                      <input type="text" placeholder="enter your email address" />
                      <button type="submit">subscribe</button>
                    </form>
                  </div>
                </ReactWOW>
              </div>
            </Col>
          </Row>
        </div>
      )
    }
    return (
      <footer className="top-foo">
        <div className="footer-top section">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                {contents}
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default Subscribe;