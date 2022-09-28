import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import sample1 from '../../assets/images/banner/1.png';
import sample2 from '../../assets/images/banner/2.png';
import sample3 from '../../assets/images/banner/3.png';

class Info extends Component {
  render() {
    return (
      <div id="info" className="wd_scroll_wrap wd_scroll">
        <section className="info-area section pd-t150 pd-b150 bg-primary">
          <Container>
            <Row>
              <Col lg={5} md={12} sm={12} className="col-xs-12">
                <h2 className="text-white f-40">HOW WILL THE SHAREHOLDERS EARN MONEY?</h2>
                <p className="text-secondary fw-600 f-20">After we successfully launch Shareholders Gallery's NFT on December 28th 2021 - All focus will be directed towards the launch of Killer Cubs Gen 1: Featuring "Little Jay" - on February 22, 2022( Killer Cubs is 90% completed ) <a href="https://killercubs.com" target="_blank">Killer Cubs</a></p>
                <p className="text-white fw-600 f-20">( All profits are paid out automatically and coded into the smart contract. ) The predicted sell out total will be $3,000,000.</p>
                <p className="text-white fw-600 f-20">Killer Cubs will have a total of 10,000 Nft's for sale. Prices will start at $100 and rise up to $500 per Nft by the end of 5 phases. PRE-SALE, PHASE 1 - PHASE 4</p>
                <p className="text-secondary fw-600 f-20">Max 25 Nft's per order</p>
              </Col>
              <Col lg={7} md={12} sm={12} className="col-xs-12">
                <Col lg={12} md={12} sm={12} className="col-xs-12 pd-b30">
                  <figure className="d-flex justify-content-center">
                    <img src={sample1} alt="nft" className="mx-sm-500" />
                  </figure>
                </Col>

                <Col lg={6} md={6} sm={6} className="col-xs-12">
                  <figure>
                    <img src={sample2} alt="nft" />
                  </figure>
                </Col>

                <Col lg={6} md={6} sm={6} className="col-xs-12">
                  <figure>
                    <img src={sample3} alt="nft" />
                  </figure>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Info;
