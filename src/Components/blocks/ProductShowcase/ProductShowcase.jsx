import React, { Component } from 'react';

import imgGuide from '../../../assets/images/prototype/product_guide.png';
import imgOnboarding from '../../../assets/images/prototype/product_onboarding.png';
import imgRetro from '../../../assets/images/prototype/product_retro.png';
import imgStandup from '../../../assets/images/prototype/product_standup.png';
import img1x1 from '../../../assets/images/prototype/product_1on1.png';

import './ProductShowcase.scss';

export default class ProductShowcase extends Component {
  render() {
    return (
      <div className="product">
        <h2 className="product__header">Your Remote Management Toolkit</h2>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Free Remote Handbook</h3>
            <p>
              Customise our remote handbook templates to improve team
              organisation, communication & motivation
            </p>
            <a className="block__cta" href="#signup">
              Get Started {'>'}
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
            <h3>Increase new hire productivity & retention</h3>
            <p>
              New hires are 70% more productive & are 82% more likely to be
              retained if you onboard them effectively. Use our remote
              onboarding tool to guide them through their first few weeks in
              your team
            </p>
            <a className="block__cta" href="#signup">
              Get Started {'>'}
            </a>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Build a Growth Mindset</h3>
            <p>
              Gain high-value insights & take action on problems within your
              company using our framework for effective remote retrospectives
            </p>
            <a className="block__cta" href="#signup">
              Get Started {'>'}
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
            <img alt="Mentorship" src={imgStandup} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>Stay in Sync Whilst Remote</h3>
            <p>
              Trigger daily & weekly standups focused on reflection &
              improvement to constantly align & improve your team’s performance
            </p>
            <a className="block__cta" href="#signup">
              Get Started {'>'}
            </a>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Connect With Your Team</h3>
            <p>
              Learn how to run high-impact 1-on-1s with each team member to keep
              them motivated, aligned & moving towards their professional goals
            </p>
            <a className="block__cta" href="#signup">
              Get Started {'>'}
            </a>
          </div>
          <div className="block__img">
            <img alt="1x1s" src={img1x1} className="block__img__bg" />
          </div>
        </div>
      </div>
    );
  }
}
