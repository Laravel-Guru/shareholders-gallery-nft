import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
//import OwlCarousel from 'react-owl-carousel2';

class Tokens extends Component {
  render() {
    // const options = {
    //   slideSpeed: 1000,
    //   autoplayTimeout: 1000,
    //   autoplay: true,
    //   reWind: true,
    //   margin: 20,
    //   nav: false,
    //   loop: true,
    //   dots: false,
    //   navText: [
    //     '<i class="fa fa-angle-left"></i>',
    //     '<i class="fa fa-angle-right"></i>'
    //   ],
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     600: {
    //       items: 2
    //     },
    //     1000: {
    //       items: 3,
    //       margin: 30
    //     }
    //   }
    // };

    let contents = (
      <Row>
        <Col lg={12} md={12} sm={12} className="col-xs-12">
          <div className="section-heading2">
            <h2 className="fw-700">GALLERY NFT SALE: 3 PHASES</h2>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} className="col-xs-12">
          {/* <OwlCarousel ref="carousel" options={options}> */}
          <Col lg={4} md={4} sm={12} className="col-xs-12 text-right">
            <div className="tokens w-100 ">
              <div className="token-name text-primary bg-white">Pre-Sale</div>
              <div className="token-body bg-secondary w-100 d-flex align-items-center justify-content-center flex-column">
                <span className="token-target text-primary">Target - to sell 800 NFT's</span>
                <button className="right-btn">Price $500 Per NFT</button>
                <span className="easypiechart skill-circle bg-primary">
                  <span className="percent head-font">40</span>
                  <br />
                  <span className="con">of Total Supply</span>
                </span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="col-xs-12 text-right">
            <div className="tokens w-100 ">
              <div className="token-name text-primary bg-white">Phase 1</div>
              <div className="token-body bg-secondary w-100 d-flex align-items-center justify-content-center flex-column">
                <span className="token-target text-primary">Target - to sell 1000 NFT's</span>
                <button className="right-btn">Price $1000 Per NFT</button>
                <span className="easypiechart skill-circle bg-primary">
                  <span className="percent head-font">50</span>
                  <br />
                  <span className="con">of Total Supply</span>
                </span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="col-xs-12 text-right">
            <div className="tokens w-100 ">
              <div className="token-name text-primary bg-white">Final Phase</div>
              <div className="token-body bg-secondary w-100 d-flex align-items-center justify-content-center flex-column">
                <span className="token-target text-primary">Target - to sell 200 NFT's</span>
                <button className="right-btn">Price $1500 Per NFT</button>
                <span className="easypiechart skill-circle bg-primary">
                  <span className="percent head-font">10</span>
                  <br />
                  <span className="con">of Total Supply</span>
                </span>
              </div>
            </div>
          </Col>
          {/* </OwlCarousel> */}

          <Col lg={12} md={12} sm={12} className="col-xs-12 text-center">
            <p className="token-con">During the Pre-sale, Phase 1 and Final Phase you can save even more by buying in bulk. When you buy 5 Nft's,<br />you get a 10% discount. Buy 10 Nft's, you get a 15% discount. Buy 25 Nft's get a 25% discount</p>
          </Col>
        </Col>
      </Row>
    )
    if (this.props.animate) {
      contents = (
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <ReactWOW animation={this.props.animate} duration="1s">
                <h2>Rounds of Sale of Tokens</h2>
              </ReactWOW>
            </div>
          </Col>
          <Col lg={10} md={9} sm={12} className="col-xs-12 col-lg-offset-1 col-md-offset-1">
            <ReactWOW animation={this.props.animate} duration="1.3s">
              <Col lg={6} md={6} sm={6} className="col-xs-12 text-right">
                <div className="tokens mr-l50">
                  <div className="token-name">Pre-sale</div>
                  <div className="token-body">
                    <p>Target – to Raise USD 500,000</p>
                    <button className="left-btn">Price 1 BIT – $0.25</button>
                    <span className="easypiechart skill-circle">
                      <span className="percent head-font">20</span>
                      <br />
                      <span className="con">Special Bonus</span>
                    </span>
                  </div>
                </div>
              </Col>
            </ReactWOW>
            <ReactWOW animation={this.props.animate} duration="1.6s">
              <Col lg={6} md={6} sm={6} className="col-xs-12 text-right">
                <div className="tokens mr-r50">
                  <div className="token-name">ICO</div>
                  <div className="token-body">
                    <p>Target – to Raise USD 20,000,000</p>
                    <button className="right-btn">Price 1 BIT - $1.00</button>
                    <div className="prices">
                      <h3 className="f-20">Bonus for ICO :</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>bonus</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1day</td>
                            <td>35%</td>
                          </tr>
                          <tr>
                            <td>2 - 4 Days </td>
                            <td>20%</td>
                          </tr>
                          <tr>
                            <td>5 - 13 Days</td>
                            <td>10%</td>
                          </tr>
                          <tr>
                            <td>14 - 31 Day</td>
                            <td>0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
            </ReactWOW>
            <Col lg={12} md={12} sm={12} className="col-xs-12 text-center">
              <ReactWOW animation={this.props.animate} duration="1.9s">
                <p className="token-con">The sale of tokens It is a long established fact that a reader will be distracted by the<span> readable content of a page when looking at its layout.</span>There are many variations of passages of Lorem Ipsum available. There are many variations of passages.</p>
              </ReactWOW>
            </Col>
          </Col>
        </Row>
      )
    }
    return (
      <div id="tokens" className="wd_scroll">
        <section className="tokens-area section">
          <Container>
            {contents}
          </Container>
        </section>
      </div>
    );
  }
}

export default Tokens;