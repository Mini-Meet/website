import React, { Component } from 'react';

import imgGuide from '../../../assets/images/prototype/product_guide.png';
import imgStandup from '../../../assets/images/prototype/product_standup.png';
import imgRetro from '../../../assets/images/prototype/product_retro.png';
import imgTools from '../../../assets/images/prototype/product_tools.png';

import './ProductShowcase.scss';

export default class ProductShowcase extends Component {
  render() {
    return (
      <div className="product">
        <h2 className="product__header">
          Your Toolkit For Better Product Work
        </h2>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Organise your team in minutes</h3>
            <p>
              Use our ready-to-go templates to build a product playbook to
              quickly get your team on the same page
            </p>
            <a className="block__cta" href="https://calendly.com/henry-latham">
              Book a Free Call {'>'}
            </a>
          </div>
          <div className="block__img">
            <img alt="Remote Guide" src={imgGuide} className="block__img__bg" />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img alt="Onboarding" src={imgStandup} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>Feel More Like A Team</h3>
            <p>
              Apply tools & tactics from the world’s best to communicate your
              vision & get your team to execute towards that vision consistently
            </p>
            <a className="block__cta" href="https://calendly.com/henry-latham">
              Book a Free Call {'>'}
            </a>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Build a Growth Mindset</h3>
            <p>
              Gain high-value insights & take action on problems within your
              company using our framework for effective remote retrospectives,
              1-on-1s and standups
            </p>
            <a className="block__cta" href="https://calendly.com/henry-latham">
              Book a Free Call {'>'}
            </a>
          </div>
          <div className="block__img">
            <img
              alt="Team Retreats"
              src={imgRetro}
              className="block__img__bg"
            />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img alt="Onboarding" src={imgTools} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>Adapted To Your Unique Context</h3>
            <p>
              Learn & apply different approaches to product management to suit
              your specific team setup
            </p>
            <a className="block__cta" href="https://calendly.com/henry-latham">
              Book a Free Call {'>'}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
