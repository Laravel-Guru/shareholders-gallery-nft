import React, { Component, Fragment } from 'react';
import About from '../components/about/m_about';
import Roadmap from '../components/roadMap/m_roadmap';
import Tokens from '../components/token/m_tokens';
import MainSlider from '../components/mainSlider/m_mainSlider';
import Previews from '../components/previews/previews';
import Info from '../components/info/info';
import Faqs from '../components/faq/faqs';
import Gallery from '../components/gallery/gallery';

class M_HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="wd_scroll_wrap">
          <MainSlider />
          <About fill="#10122d" />
        </div>
        <div className="wd_scroll_wrap bg-secondary">
          <Previews />
        </div>

        <div className="wd_scroll_wrap">
          <Tokens />
        </div>

        <Roadmap fill="#10122d" />

        <Faqs />
        <Info />
        <Gallery />

      </Fragment>
    );
  }
}

export default M_HomePage;
