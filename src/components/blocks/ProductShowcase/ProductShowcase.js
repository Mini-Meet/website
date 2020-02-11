// @flow
import React, { Component } from 'react';

import imgGuide from '../../../assets/images/prototype/product_guide.png';
import imgSprints from '../../../assets/images/prototype/product_sprints.png';
import imgRemote from '../../../assets/images/prototype/product_remote.png';
import imgMentors from '../../../assets/images/prototype/product_mentors.png';
// import imgOnboarding from '../../../assets/images/prototype/product_onboarding.png';
// import imgStandup from '../../../assets/images/prototype/product_standup.png';
// import imgRetro from '../../../assets/images/prototype/product_retro.png';
// import imgTools from '../../../assets/images/prototype/product_tools.png';

import './ProductShowcase.scss';

type Props = {
  header: string,
  blockOneHeader: string,
  blockTwoHeader: string,
  blockThreeHeader: string,
  blockFourHeader: string,
  url: string,
  cta: string,
};

export default class ProductShowcase extends Component<Props> {
  render() {
    const {
      header,
      blockOneHeader,
      blockTwoHeader,
      blockThreeHeader,
      blockFourHeader,
      url,
      cta,
    } = this.props;

    return (
      <div className="product">
        <h2 className="product__header">{header}</h2>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>{blockOneHeader}</h3>
            <p>
              Learn how the world’s best Product Managers run their product
              teams, covering anything from leadership to prouct strategy, &
              apply these practices with our digital toolkit
            </p>
            <a className="block__cta" href={url}>
              {cta}
            </a>
          </div>
          <div className="block__img">
            <img
              alt="Remote Guide"
              src={imgSprints}
              className="block__img__bg"
            />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img alt="Onboarding" src={imgGuide} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>{blockTwoHeader}</h3>
            <p>
              Effortlessly get your existing team & new hires better organised &
              better connected. Use our ready-to-go templates to build a product
              playbook
            </p>
            <a className="block__cta" href={url}>
              {cta}
            </a>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>{blockThreeHeader}</h3>
            <p>
              Join our community of experienced Product Managers to help set
              personal goals & to advise you throughout your career
            </p>
            <a className="block__cta" href={url}>
              {cta}
            </a>
          </div>
          <div className="block__img">
            <img
              alt="Team Retreats"
              src={imgMentors}
              className="block__img__bg"
            />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img alt="Onboarding" src={imgRemote} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>{blockFourHeader}</h3>
            <p>
              Learn how world-class remote teams operate & unlock the ability to
              build your own remote team, or to nail your next remote job
              interview
            </p>
            <a className="block__cta" href={url}>
              {cta}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
