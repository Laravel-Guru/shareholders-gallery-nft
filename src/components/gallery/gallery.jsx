import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';
import sample1 from '../../assets/images/gallery/1.png';
import sample2 from '../../assets/images/gallery/2.png';
import sample3 from '../../assets/images/gallery/3.png';
import sample4 from '../../assets/images/gallery/4.png';

class Gallery extends Component {
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
        image: sample2,
      },
      {
        image: sample3,
      },
      {
        image: sample4,
      }
    ];
    const options = {
      autoplayTimeout: 3000,
      autoplay: true,
      loop: true,
      margin: 10,
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
        480: {
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    };
    const Items = ({ image }) => (
      <div className="blog" style={{ borderRadius: '5px' }}>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
    );

    return (
      <div id="gallery" className="wd_scroll_wrap wd_scroll">
        <section className="gallery-area blog-area section bg-secondary pd-t30 pd-b30">
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
        </section>
      </div>
    );
  }
}

export default Gallery;
