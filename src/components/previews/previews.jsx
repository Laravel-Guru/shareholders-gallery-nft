import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';
import sample1 from '../../assets/images/arts/1.png';

class Previews extends Component {
  componentDidMount() {
    $('.blog-slider .item').hover(
      function () {
        $(this)
          .closest('.blog-slider')
          .addClass('active');
      },
      function () {
        $(this)
          .closest('.blog-slider')
          .removeClass('active');
      }
    );
  }
  render() {
    const data = [
      {
        image: sample1,
      },
      {
        image: sample1,
      },
      {
        image: sample1,
      }
    ];
    const options = {
      slideSpeed: 500,
      autoplayTimeout: 3000,
      autoplay: true,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    };
    const Items = ({ image }) => (
      <Col lg={12} md={12} sm={12} className="col-xs-12 item">
        <div className="blog">
          <figure>
            <img src={image} alt="" />
          </figure>
        </div>
      </Col>
    );

    return (
      <div id="news" className="wd_scroll_wrap wd_scroll">
        <section className="blog-area section pd-t150 pd-b150">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="section-heading2">
                  {this.props.animate ? (
                    <ReactWOW animation={this.props.animate} duration="1s">
                      <h2 className="text-primary fw-800">PREVIEWS OF SHAREHOLDERS GALLERY NFTS</h2>
                    </ReactWOW>
                  ) : (
                    <h2 className="text-primary fw-800">PREVIEWS OF SHAREHOLDERS GALLERY NFTS</h2>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <div className="blog-slider">
                <OwlCarousel ref="carousel" options={options}>
                  {data.map((obj, i) => (
                    <Items
                      key={i}
                      image={obj.image}
                      title={obj.title}
                      date={obj.date}
                      text={obj.text}
                    />
                  ))}
                </OwlCarousel>
              </div>
              {/* <div className="view-btn col-xs-12">
                <Link to="#">All News</Link>
              </div> */}
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Previews;
