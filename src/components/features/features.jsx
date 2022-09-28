import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import features1 from '../../assets/images/features/1.png';
import features2 from '../../assets/images/features/2.png';
import features3 from '../../assets/images/features/3.png';
import features4 from '../../assets/images/features/4.png';


class Features extends Component {
  render() {
    let con = (
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <h2>Our Features</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="featured-lists">
              <ul>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Whitelist</h2>
                      <p>
                        There are 450 connections for our whitelists. <br />
                        30-40 connections will be added every day for members <br />
                        who assist the community through Twitter, Discord, Youtube <br />
                        and the others, until being launched.
                        Help to spread with the word, grow the lair, <br />
                        then have a chance to win a spot in the whitelist!
                      </p>
                      {/*<Link to="#" className="btn1">read more</Link>*/}
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure><img src={features1} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                    <h2>Whitelist</h2>
                      <p>
                        There are 450 connections for our whitelists. <br />
                        30-40 connections will be added every day for members <br />
                        who assist the community through Twitter, Discord, Youtube <br />
                        and the others, until being launched.
                        Help to spread with the word, grow the lair, <br />
                        then have a chance to win a spot in the whitelist!
                      </p>
                      {/*<Link to="#" className="btn1">read more</Link>*/}
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Giveaways</h2>
                      <p>
                        90 Giveaways are reserved for memebers in the whitelist.
                        The system will randomly drop the giveaways at any time for big contributors.
                      </p>
                      {/*<Link to="#" className="btn1">read more</Link>*/}
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure><img src={features2} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Giveaways</h2>
                      <p>
                        90 Giveaways are reserved for memebers in the whitelist. <br />
                        The system will randomly drop the giveaways at any time for big contributors.
                      </p>
                    </div>
                  </Col>
                </li>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Pre-sale</h2>
                      <p>
                        Before starting offical sale, our whitelists will be able to purchase <br />
                        your chimps for lower price than offical sale.<br />
                        Each whitelist will be able to mint a maximum of 2 chimps.
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure><img src={features3} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Pre-sale</h2>
                        <p>
                        Before starting offical sale, our whitelists will be able to purchase <br />
                        your chimps for lower price than offical sale.<br />
                        Each whitelist will be able to mint a maximum of 2 chimps.
                        </p>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Official-Sale</h2>
                      <p>
                        4 phases will be automatically opened in order, according to the time-line.<br />
                        Each phase will have limitted amount of chimps, and increasing price.
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure><img src={features4} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Official-Sale</h2>
                      <p>
                        4 phases will be automatically opened in order, according to the time-line.<br />
                        Each phase will have limitted amount of chimps, and increasing price.
                      </p>
                    </div>
                  </Col>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    )
    if (this.props.animate) {
      con = (
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="section-heading2">
                <ReactWOW animation={this.props.animate} duration="1s">
                  <h2>Our Features</h2>
                </ReactWOW>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="featured-lists">
                <ul>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Lending</h2>
                          <p>Unique platform for lending and investment with a safety fund <br />and cooperation with world-wide arbitration.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure><img src={features1} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Lending</h2>
                          <p>Unique platform for lending and investment with a safety fund <br /> and cooperation with world-wide arbitration.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Exchange Money</h2>
                          <p>Exchange between all popular currencies with a couple of clicks. <br />Instant send from one currency to another.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure><img src={features2} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Exchange Money</h2>
                          <p>Exchange between all popular currencies with a couple of clicks.<br />Instant send from one currency to another.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Investment</h2>
                          <p>Improved system of borrower's verification. Providing <br />verification services for other services.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure><img src={features3} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Investment</h2>
                          <p>Improved system of borrower's verification. Providing <br />verification services for other services.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>Keep your money, exchange your money, invest your money, pay <br />services and make purchases.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure><img src={features4} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>Keep your money, exchange your money, invest your money, pay  <br />services and make purchases.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }

    return (
      <div id="features" className="wd_scroll_wrap wd_scroll">
        <section className="features-area section">
          {con}
        </section>
      </div>
    );
  }
}

export default Features;