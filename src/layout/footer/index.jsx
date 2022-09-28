import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


class Footer extends Component {
  constructor(props) {
    super(props)
    const date = new Date()
    this.year = date.getFullYear()
  }
  render() {
    return (
      <div className="wd_scroll_wrap">
        <footer className="foo-bot">
          <div className="footer-bottom">
            <Container>
              <Row>
                <Col lg={6} md={6} sm={12} className="col-xs-12">
                  <div className="copyright">
                    <p>© {this.year - 1} - {this.year} <Link to="#"><span>KILLER CUBS</span></Link> | All rights reserved. Design by <Link to="#"><span>Awesome</span></Link></p>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="col-xs-12">
                  <div className="foo-link">
                    <ul>
                      {/* <li><Link to="#">WhitePaper</Link></li>
                      <li><Link to="#">Terms of Service</Link></li>
                      <li><Link to="#">Privacy Policy</Link></li> */}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;