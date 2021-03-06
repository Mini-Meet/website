import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import {
  Footer,
  Header,
  Hero,
  Featured,
  ProductShowcase,
  Mentors,
} from '../../blocks';

import './Mentors.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('Course / Page / Mentors');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header light />
        <div id="signup" />
        <Hero
          title="Become a Product Mentor"
          subtitle="Upgrade Your CV, as Well as Building Your Leadership & Communication Skills By Helping Junior/Mid-Level Product Managers Master Product Management"
          typeform
          url="https://productmastery.typeform.com/to/eaddO2"
          mixpanel="Typeform Open"
        />
        <Featured header="Where our Product Mentors Work" />
        <ProductShowcase
          header="How We Help Our PMs"
          blockOneHeader="A Homebase For Product Management"
          blockTwoHeader="Transform Your Product Team in Minutes"
          blockThreeHeader="Find A Product Mentor"
          blockFourHeader="Learn Remote Best Practice"
          url="#signup"
          cta="Become A Mentor >"
        />
        <Mentors />
        <Hero
          title="Become a Product Mentor"
          subtitle="Add to Your CV & Experience Whilst Helping Junior/Mid-Level Product Managers Accelerate Their Career"
          typeform
          url="https://productmastery.typeform.com/to/eaddO2"
          mixpanel="Typeform Open"
        />
        <Footer page="HOME" />
      </div>
    );
  }
}
