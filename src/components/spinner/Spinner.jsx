import React from 'react';
import loader from '../../assets/images/banner/loader.gif';

const Spinner = (
  <div id="preloader">
    <div id="status">
      <img src={loader} id="preloader_image" alt="loader" />
    </div>
  </div>
)

export default Spinner