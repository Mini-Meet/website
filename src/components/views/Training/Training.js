import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero, Footer, Testimonials } from '../../blocks';
import './Training.scss';

export default class Training extends Component {
  componentDidMount() {
    Mixpanel.track('LDJ / Home');
  }

  render() {
    const url = '/case-study';

    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="We Train You To Build a Profitable Product Within 40 Days"
          subtitle="Product career not where you want to be? Worried about your job security during The Covid Crisis? Join our 40-day part-time coaching programme to learn & apply the skills of high-level product leaders, delivering a real, revenue-generating product with just a few hours each week:"
          btnText="Get Your Free Case Study"
          mixpanelEvent="Home Click"
          nextpage
          nextpageUrl={url}
          url={url}
        />
        <Testimonials />
        <Footer page="HOME" />
      </div>
    );
  }
}
