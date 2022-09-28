import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
import TokenDetails from './tokenDetails';

class Tokens extends Component {
  render() {
    let contents = (
      <Row>
        <Col lg={12} md={12} sm={12} className="col-xs-12">
          <div className="section-heading2">
            <h2>Rounds of Sale of Tokens</h2>
          </div>
        </Col>
        <Col lg={10} md={9} sm={12} className="col-xs-12 col-lg-offset-1 col-md-offset-1">
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
          <Col lg={12} md={12} sm={12} className="col-xs-12 text-center">
            <p className="token-con">The sale of tokens It is a long established fact that a reader will be distracted by the<span> readable content of a page when looking at its layout.</span>There are many variations of passages of Lorem Ipsum available. There are many variations of passages.</p>
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
        <TokenDetails animate={this.props.animate} />
      </div>
    );
  }
}

export default Tokens;