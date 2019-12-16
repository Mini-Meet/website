import React, { Component } from 'react';

import imgMentorship from '../../../assets/images/prototype/productImg_mentorship.png';
import imgGuide from '../../../assets/images/prototype/productImg4.png';
import imgRetro from '../../../assets/images/prototype/productImg_retro.png';

import './ProductShowcase.scss';

export default class ProductShowcase extends Component {
  render() {
    return (
      <div className="product">
        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Transform The Way You Work</h3>
            <p>
              Collaborate more effectively across time zones & different working
              hours with our remote handbook template, customisable to share
              with your team
            </p>
          </div>
          <div className="block__img">
            <img alt="Remote Guide" src={imgGuide} className="block__img__bg" />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img
              alt="Mentorship"
              src={imgMentorship}
              className="block__img__bg"
            />
          </div>
          <div className="block__text">
            <h3>Design Meaningful Interactions</h3>
            <p>
              Better connect team members with our mentorship programme,
              automated 1x1s & other tools & tactics to stimulate collaboration
              & connection across your teams
            </p>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Build a Growth Mindset</h3>
            <p>
              Gain high-value insights & take action using our remote tools for
              continuous improvement, such as our tool for running remote
              retrospectives
            </p>
          </div>
          <div className="block__img">
            <img alt="Retro" src={imgRetro} className="block__img__bg" />
          </div>
        </div>
      </div>
    );
  }
}
