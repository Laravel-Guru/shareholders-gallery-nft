import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

class Steps extends Component {
  render() {
    let contents = (
      <React.Fragment>
        <section className="steps-area section">
          <Container>
            <Row>
              <Col lg={11} md={11} sm={12} className="col-xs-12">
                <div className="steps-heading">
                  <h2>Few Steps For a Loan</h2>
                  <div className="right-con">
                    <span>Scroll Down</span>
                    <Link to="#steps"><i className="fa fa-angle-down"></i></Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="steps-details">
          <Container>
            <Row>
              <Col lg={10} md={10} sm={12} className="col-xs-12 col-md-offset-1 col-lg-offset-1">
                <div className="steps-cont">
                  <ul>
                    <li className="l-con">
                      <div className="cont">
                        <h2>01. Registration On The Platform</h2>
                        <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur  <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                      </div>
                      <span><i className="fa fa-users"></i></span>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <h2>02. Passing Verification</h2>
                        <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                      </div>
                      <span><i className="fa fa-check-square-o"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <h2>03. Creating An Application For a Loan</h2>
                        <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                      </div>
                      <span><i className="fa fa-edit "></i></span>
                      <div className="mid-icons"></div>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <h2>04. Financing a Loan</h2>
                        <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                      </div>
                      <span><i className="fa fa-university"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <h2>05. Activating a Loan</h2>
                        <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                      </div>
                      <span><i className="fa fa-bell"></i></span>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <h2>06. Receiving Funds</h2>
                        <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                      </div>
                      <span><i className="fa fa-paw"></i></span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
    if (this.props.animate) {
      contents = (
        <React.Fragment>
          <section className="steps-area section">
            <Container>
              <Row>
                <Col lg={11} md={11} sm={12} className="col-xs-12">
                  <div className="steps-heading">
                    <ReactWOW animation={this.props.animate} duration="1s">
                      <h2>Few Steps For a Loan</h2>
                    </ReactWOW>
                    <div className="right-con">
                      <span>Scroll Down</span>
                      <Link to="#steps"><i className="fa fa-angle-down"></i></Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="steps-details">
            <Container>
              <Row>
                <Col lg={10} md={10} sm={12} className="col-xs-12 col-md-offset-1 col-lg-offset-1">
                  <div className="steps-cont">
                    <ul>
                      <li className="l-con">
                        <ReactWOW animation={this.props.animate} duration="1s">
                          <div className="cont">
                            <h2>01. Registration On The Platform</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur  <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-users"></i></span>
                      </li>
                      <li className="r-con">
                        <ReactWOW animation={this.props.animate} duration="1.3s">
                          <div className="cont">
                            <h2>02. Passing Verification</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-check-square-o"></i></span>
                      </li>
                      <li className="l-con">
                        <ReactWOW animation={this.props.animate} duration="1.6s">
                          <div className="cont">
                            <h2>03. Creating An Application For a Loan</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-edit "></i></span>
                        <div className="mid-icons"></div>
                      </li>
                      <li className="r-con">
                        <ReactWOW animation={this.props.animate} duration="1.9s">
                          <div className="cont">
                            <h2>04. Financing a Loan</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-university"></i></span>
                      </li>
                      <li className="l-con">
                        <ReactWOW animation={this.props.animate} duration="2.1s">
                          <div className="cont">
                            <h2>05. Activating a Loan</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-bell"></i></span>
                      </li>
                      <li className="r-con">
                        <ReactWOW animation={this.props.animate} duration="2.4s">
                          <div className="cont">
                            <h2>06. Receiving Funds</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-paw"></i></span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </React.Fragment>
      )
    }
    return (
      <div id="steps" className="wd_scroll_wrap wd_scroll">
        {contents}
        <div className="sud">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 181.1" style={{enableBackground:"new 0 0 1920 181.1"}} space="preserve">
              <g>
                  <path style={{fillRule:'evenodd',clipRule:'evenodd',fill:this.props.fill ? this.props.fill : '#10122d'}} className="st0" d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                    c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                    c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                    c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                    c15.3,22.7,51,22.7,53,23v28.1H0V80z" />
              </g>
            </svg>
        </div>
      </div>
    );
  }
}

export default Steps;