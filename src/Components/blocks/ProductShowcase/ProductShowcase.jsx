import React, { Component } from 'react';

import imgMentorship from '../../../assets/images/prototype/productImg_mentorship.png';
import imgMeasure from '../../../assets/images/prototype/productImg_measure.png';
import imgRetro from '../../../assets/images/prototype/productImg_retro.png';
import img1 from '../../../assets/images/prototype/productImg1.png';

import './ProductShowcase.scss';

export default class ProductShowcase extends Component {
  render() {
    return (
      <div className="product">
        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Increase Cross-Team Collaboration</h3>
            <p>
              Automatically set & monitor 1x1s through Slack or Google Calendar
              using our meeting templates to make sure your team are connecting,
              collaborating & sharing info across the business
            </p>
          </div>
          <div className="block__img">
            <img alt="Remote Guide" src={img1} className="block__img__bg" />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img alt="Retro" src={imgRetro} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>Focus on Continuous Improvement</h3>
            <p>
              Gain high-value insights & take action on problems within your
              company using our framework for effective remote retrospectives
            </p>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Measure your company culture</h3>
            <p>
              Automate surveys, retros, team check-ins & take the temperature of
              your team culture on a regular basis to ensure everyone is happy &
              productive!
            </p>
          </div>
          <div className="block__img">
            <img alt="Measure" src={imgMeasure} className="block__img__bg" />
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
            <h3>Drive Professional Growth</h3>
            <p>
              Help your employees & teammates become remote experts with our
              guided mentorship programme, inspired by remote leaders Buffer
            </p>
          </div>
        </div>
      </div>
    );
  }
}
