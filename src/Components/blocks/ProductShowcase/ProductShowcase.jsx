import React, { Component } from 'react';

import imgMentorship from '../../../assets/images/prototype/productImg_mentorship.png';
import imgRetreat from '../../../assets/images/prototype/productImg2.png';
import imgOnboarding from '../../../assets/images/prototype/productImg_onboarding.png';
import imgGuide from '../../../assets/images/prototype/productImg4.png';
import img1 from '../../../assets/images/prototype/productImg1.png';

import './ProductShowcase.scss';

export default class ProductShowcase extends Component {
  render() {
    return (
      <div className="product">
        <h2 className="product__header">Our Product</h2>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Free Remote Handbook</h3>
            <p>
              Create better collaboration, more human connection & clear
              expectations for your remote team by customising our remote
              handbook template
            </p>
            <a className="block__cta" href="#signup">
              Get Started
            </a>
          </div>
          <div className="block__img">
            <img alt="Remote Guide" src={imgGuide} className="block__img__bg" />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img
              alt="Onboarding"
              src={imgOnboarding}
              className="block__img__bg"
            />
          </div>
          <div className="block__text">
            <h3>Increase productivity & retention</h3>
            <p>
              New hires are 70% more productive & are 82% more likely to be
              retained if you onboard them effectively. Use our remote
              onboarding tool to guide them through their first few weeks in
              your team
            </p>
            <a className="block__cta" href="#signup">
              Get Started
            </a>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Run High-Impact Team Retreats</h3>
            <p>
              Organise your team retreats - and learn how to run them
              effectively - with our planning tool, allowing the whole team to
              collaborate on where to hold it and, more importantly, what they
              want to discuss
            </p>
            <a className="block__cta" href="#signup">
              Get Started
            </a>
          </div>
          <div className="block__img">
            <img
              alt="Team Retreats"
              src={imgRetreat}
              className="block__img__bg"
            />
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
              Help your employees & teammates grow, both personally &
              professionally, with our guided mentorship programme, inspired by
              remote leaders Buffer
            </p>
            <a className="block__cta" href="#signup">
              Get Started
            </a>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Run Effective 1x1s To Connect Your Team</h3>
            <p>
              Automatically set 1x1s through Slack or Google Calendar using our
              1x1 templates to make sure you’re team are connecting,
              collaborating & sharing info effectively
            </p>
            <a className="block__cta" href="#signup">
              Get Started
            </a>
          </div>
          <div className="block__img">
            <img alt="1x1s" src={img1} className="block__img__bg" />
          </div>
        </div>
      </div>
    );
  }
}
