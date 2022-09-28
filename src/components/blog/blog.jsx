import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';
import blog1 from '../../assets/images/blog/1.jpg';
import blog2 from '../../assets/images/blog/2.jpg';
import blog3 from '../../assets/images/blog/3.jpg';

class Blogs extends Component {
  componentDidMount() {
    $('.blog-slider .item').hover(
      function() {
        $(this)
          .closest('.blog-slider')
          .addClass('active');
      },
      function() {
        $(this)
          .closest('.blog-slider')
          .removeClass('active');
      }
    );
  }
  render() {
    const data = [
      {
        image: blog1,
        title: "Report about the team's trip to the road show",
        date: 'September 29, 2018',
        text:
          "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
      },
      {
        image: blog2,
        title: 'What’s Being Built – and What’s Not – on 2019’s',
        date: 'October 29, 2018',
        text:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.'
      },
      {
        image: blog3,
        title: 'How Market Makers Inject Liquidity Into the Cryptoconomy',
        date: 'January 29, 2018',
        text:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.'
      },
      {
        image: blog1,
        title: "Report about the team's trip to the road show",
        date: 'September 29, 2018',
        text:
          "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
      },
      {
        image: blog2,
        title: 'What’s Being Built – and What’s Not – on 2019’s',
        date: 'October 29, 2018',
        text:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.'
      },
      {
        image: blog3,
        title: 'How Market Makers Inject Liquidity Into the Cryptoconomy ',
        date: 'January 29, 2018',
        text:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.'
      }
    ];
    const options = {
      slideSpeed: 500,
      autoplay: true,
      rewind: true,
      margin: 0,
      nav: true,
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
    const Items = ({ image, title, date, text }) => (
      <Col lg={12} md={12} sm={12} className="col-xs-12 item">
        <div className="blog">
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="content">
            <span>
              <i className="fa  fa-calendar-o"></i>
              {date}
            </span>
            <h4>
              <Link to="#">{title}</Link>
            </h4>
            <p>{text}</p>
            <Link to="#" className="blog-btn">
              read more <i className="fa  fa-arrow-circle-o-right"></i>
            </Link>
          </div>
        </div>
      </Col>
    );

    return (
      <div id="news" className="wd_scroll_wrap wd_scroll">
        <section className="blog-area section">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="section-heading2">
                  {this.props.animate ? (
                    <ReactWOW animation={this.props.animate} duration="1s">
                      <h2>Latest News</h2>
                    </ReactWOW>
                  ) : (
                    <h2>Latest News</h2>
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
              <div className="view-btn col-xs-12">
                <Link to="#">All News</Link>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Blogs;
