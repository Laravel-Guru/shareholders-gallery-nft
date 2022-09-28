import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import aboutimg from '../../assets/images/about/1.png';

class About extends Component {
  render() {
    let page = (
      <Row>
        <Col lg={6} md={6} sm={12} className="col-xs-12">
          <div className="about-content">
            <h2 className="f-40 fw-400">
              Welcome To The KILLER CUBS Yacht Club
            </h2>
            <p>ACYC is a collection of 9,000 chimp NFTs—unique digital collectibles living on the Ethereum blockchain. </p>
            <p>Your chimp doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
            <p>There are no bonding curves here. Buying a chimp costs from 0.01 ETH to 0.04 through 4 phases / tiers. Whilelists can purchase a chimp lower price than expected at public sale. When you buy an Killer Club, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Killer Club can serve as your digital identity, and open digital doors for you.</p>
            <div className="buttons">
              <Link to="#" className="btn1">Road map</Link>
              <Link to="#" className="btn3">Become a whitelist!</Link>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="col-xs-12">
          <div className="about-img">
            <img src={aboutimg} alt="about" />
          </div>
        </Col>
      </Row>
    )
    if (this.props.animate) {
      page = (
        <Row>
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <div className="about-content">
              <ReactWOW animation={this.props.animate} duration="1s">
                <h2 className="f-40 fw-400">
                  About The Project
                    </h2>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.3s">
                <p>KILLER CUBS is a lending and investment, multicurrency and multifunctional online platform based on blockchain technology. There investors and borrowers meet each other and have the opportunity to lend money on mutually beneficial.</p>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.6s">
                <p>KILLER CUBS is a unique service that allows individuals to access loans from the comfort of their home in fiat currencies or crypto-currencies.</p>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.9s">
                <p>KILLER CUBS is a multi-functional platform which allows each participant to keep money in a multi-currency online wallet, buy and sell currency on the exchange, invest money, get a loan in a convenient currency.</p>
              </ReactWOW>
              <div className="buttons">
                <Link to="#" className="btn1">WHITEPAPER</Link>
                <Link to="#" className="btn3">Buy Tokens Now!</Link>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <ReactWOW animation={this.props.animate} duration="1s">
              <div className="about-img">
                <img src={aboutimg} alt="about" />
              </div>
            </ReactWOW>
          </Col>
        </Row>
      )
    }
    return (
      <div id='about' className="wd_scroll_wrap wd_scroll">
        <div className="about-area pd-t70 pd-b100">
          <Container>
            {page}
          </Container>
        </div>
        <div className="sud">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 181.1" style={{enableBackground:"new 0 0 1920 181.1"}} space="preserve">
              <g>
                  <path style={{fillRule:'evenodd',clipRule:'evenodd',fill: this.props.fill ? this.props.fill : '#10122d'  }} className="st0" d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
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

export default About;