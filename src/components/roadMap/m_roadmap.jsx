import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

class Roadmap extends Component {
  render() {
    let contents = (
      <React.Fragment>
        <section className="steps-area section bg-secondary pb-0">
          <Container>
            <Row className="d-flex">
              <Col lg={7} md={11} sm={12} className="col-xs-12 mr-auto ml-auto">
                <div className="steps-heading text-center pd-b90">
                  <h2 className="text-primary">ROAD MAP</h2>
                </div>

                <div className="steps-heading">
                  <p className="text-primary fw-600 f-20 mb-0 pl-30">Shareholders Gallery will be selling 40% of the company in the form of an NFT.<br/>There will be a total of 2000 Shareholders Gallery NFT's sold</p>

                  <div className="right-con">
                    <Link to="#steps"><i className="fa fa-angle-down"></i></Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="steps-details bg-secondary">
          <Container>
            <Row className="d-flex">
              <Col lg={7} md={10} sm={12} className="col-xs-12 mr-auto ml-auto">
                <div className="steps-cont">
                  <ul>
                    <li className="l-con pl-30">
                      <div className="cont">
                        <p className="text-primary fw-600 f-20 pd-b35">Pre-sale: 800 Nft's - $500 each<br />
                          Phase 1:  1000 Nft's - $1000 each<br />
                          Final Phase:  200 Nft's - $1500 each</p>

                        <p className="text-primary fw-600 f-20">1 NFT is equal to 0.02% ownership of Shareholders Gallery. 50 NFT's equal 1% ownership of Shareholders Gallery.</p>
                      </div>
                      <span><i className="fa fa-users"></i></span>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <p className="text-primary fw-600 f-20">10 ETH GIVEAWAY</p>
                        <p className="text-primary fw-600 f-20">We will give 50 random NFT holders 0.2 ETH each, as long as they are holding 1 or more Shareholders Gallery NFT's.<br/>(ETA on this drop is 2 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fas fa-gifts"></i></span>
                    </li>
                    <li className="l-con pl-30">
                      <div className="cont">
                        <p className="text-primary fw-600 f-20">20 Random Shareholders Gallery NFT's will be withheld from the sale and randomly given out to anyone holding 1 or more Shareholders Gallery NFT's.  Once the 20 NFT's are depleted the giveaway will end. (ETA on this drop will be 3 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fas fa-hand-holding-heart"></i></span>
                      <div className="mid-icons"></div>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                      <p className="text-primary fw-600 f-20">5 ETH GIVEAWAY</p>
                        <p className="text-primary fw-600 f-20">Top 25 people who help build our community via Discord, twitter etc will receive 0.2 ETH each.(ETA on this drop will be 5 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fas fa-gift"></i></span>
                    </li>
                    <li className="l-con pl-30">
                      <div className="cont">
                        <p className="text-primary fw-600 f-20">Launch of Killer Cubs Generation 1 Featuring "Little Jay" ( ETA 2.22.2022 )</p>
                      </div>
                      <span><i className="fas fa-rocket"></i></span>
                      <div className="mid-icons"></div>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <p className="text-primary fw-600 f-20">Launch Killer Cubs Generation 2 Featuring "Little Mikey" ( ETA 5.22.2022 )</p>
                      </div>
                      <span><i className="fas fa-rocket"></i></span>
                    </li>
                    <li className="l-con pl-30">
                      <div className="cont">
                        <p className="text-primary fw-600 f-20">Launch Killer Cubs Generation 3 Featuring "Little LeatherFace" ( ETA 8.22.2022 )</p>
                      </div>
                      <span><i className="fas fa-rocket"></i></span>
                      <div className="mid-icons"></div>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <p className="text-primary fw-600 f-20">Launching of the Shareholders Gallery clubhouse. Hang out and kick back with your fellow Shareholders Gallery members in the Metaverse. (ETA 9-12 months after the sale ends)</p>
                      </div>
                      <span><i className="fas fa-rocket"></i></span>
                    </li>
                    {/* <li className="l-con pl-30">
                      <div className="cont">
                        <p className="text-primary fw-600 f-20">Killer Cubs Gen 2 teaser: Featuring ("Little Mikey" and "Little Lecter")</p>
                      </div>
                      <span><i className="fa fa-paw"></i></span>
                    </li> */}
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
                        <div className="mid-icons"></div>
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
      <div id="road_map" className="wd_scroll_wrap wd_scroll">
        {contents}
        {/* <div className="sud">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 181.1" style={{enableBackground:"new 0 0 1920 181.1"}} space="preserve">
              <g>
                  <path style={{fillRule:'evenodd',clipRule:'evenodd',fill:this.props.fill ? this.props.fill : '#10122d'}} className="st0" d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                    c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                    c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                    c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                    c15.3,22.7,51,22.7,53,23v28.1H0V80z" />
              </g>
            </svg>
        </div> */}
      </div>
    );
  }
}

export default Roadmap;