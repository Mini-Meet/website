import React, { Component } from 'react';

import imgGuide from '../../../assets/images/prototype/product_guide.png';
import imgOnboarding from '../../../assets/images/prototype/product_onboarding.png';
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
              Build a product playbook from our product management templates to
              effortlessly improve team organisation & communication and deliver
              better results
            </p>
            <a className="block__cta" href="https://calendly.com/henry_latham">
              Book a Free Call {'>'}
            </a>
          </div>
          <div className="block__img">
            <img alt="Remote Guide" src={imgGuide} className="block__img__bg" />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img alt="Onboarding" src={imgTools} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>Learn How Remote Teams Work</h3>
            <p>
              Apply the tools & tactics from the world{`'`}s best remote teams
              so you can unlock the ability to work remote in future, whilst
              improving as a Product Manager along the way
            </p>
            <a className="block__cta" href="https://calendly.com/henry_latham">
              Book a Free Call {'>'}
            </a>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Build a Growth Mindset</h3>
            <p>
              Gain high-value insights & take action on problems within your
              team using our framework for effective retrospectives, 1-on-1s &
              standups
            </p>
            <a className="block__cta" href="https://calendly.com/henry_latham">
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
            <img
              alt="Onboarding"
              src={imgOnboarding}
              className="block__img__bg"
            />
          </div>
          <div className="block__text">
            <h3>Help new hires to excel</h3>
            <p>
              New hires are 70% more productive & are 82% more likely to be
              retained if you onboard them effectively into your team. Use our
              product onboarding tool to guide them through their first few
              weeks
            </p>
            <a className="block__cta" href="https://calendly.com/henry_latham">
              Book a Free Call {'>'}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
