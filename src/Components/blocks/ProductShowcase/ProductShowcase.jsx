import React, { Component } from 'react';

import img1 from '../../../assets/images/prototype/productImg_1.png';

import './ProductShowcase.scss';

export default class ProductShowcase extends Component {
  render() {
    return (
      <div className="product">
        <div className="block">
          <div className="block__img">
            <img alt="logo" src={img1} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>Automated 1x1s</h3>
            <p>
              Automatically set 1x1s through Slack or Google Calendar using our
              1x1 templates to make sure you’re getting the most value from each
              call
            </p>
          </div>
        </div>
      </div>
    );
  }
}
