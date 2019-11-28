import React, { Component } from 'react';

import Logo from '../../../assets/images/logoWhite.svg';

import './Featured.scss';

class Featured extends Component {
  render() {
    return (
      <div className="featured">
        <h5 className="featured__header">Featured In</h5>
        <div className="featured__logos">
          <img alt="logo" src={Logo} className="featured__logos_img" />
          <img alt="logo" src={Logo} className="featured__logos_img" />
          <img alt="logo" src={Logo} className="featured__logos_img" />
          <img alt="logo" src={Logo} className="featured__logos_img" />
        </div>
      </div>
    );
  }
}

export default Featured;
