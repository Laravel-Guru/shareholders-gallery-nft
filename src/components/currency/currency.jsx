import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
import coin1 from '../../assets/images/icons/1.png';
import coin2 from '../../assets/images/icons/2.png';
import coin3 from '../../assets/images/icons/3.png';
import coin4 from '../../assets/images/icons/4.png';
import coin5 from '../../assets/images/icons/5.png';

class Currency extends Component {
  render() {
    const data = [
      {
        coinName: 'Bitcoin',
        price: '4.160651',
        coin: 'BTC',
        image: coin1
      },
      {
        coinName: 'Ethereum',
        price: '3.245000',
        coin: 'ETH',
        image: coin2
      },
      {
        coinName: 'Dollar (USD)',
        price: '58634.000',
        coin: 'USD',
        image: coin3
      },
      {
        coinName: 'Total USD',
        price: '111969.062',
        coin: 'USD',
        image: coin4
      },
      {
        coinName: 'Token Sale',
        price: '346636.775',
        coin: '',
        image: coin5
      }
    ]

    const Items = ({ image, coinName, price, coin, dir }) => {
      if (this.props.animate) {
        return (
          <ReactWOW animation={this.props.animate} duration={`${dir + 0.7}s`}>
            <div className="rete-list bt_title">
              <div className="content">
                <div className="con">
                  <h2><img src={image} alt="" /><span>{coinName}</span></h2>
                  <button className="btn3">{price} {coin}</button>
                </div>
              </div>
            </div>
          </ReactWOW>
        )
      }
      else {
        return (
          <div className="rete-list bt_title">
            <div className="content">
              <div className="con">
                <h2><img src={image} alt="" /><span>{coinName}</span></h2>
                <button className="btn3">{price} {coin}</button>
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <section className="currency-area">
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              {
                data.map((obj, i) => (
                  <Items key={i} dir={(i + 1) * 0.3} image={obj.image} coin={obj.coin} coinName={obj.coinName} price={obj.price} />
                ))
              }
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Currency;