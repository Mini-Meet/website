import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import {
  Header,
  Hero,
  Footer,
  Testimonials,
  ProductShowcase,
} from '../../blocks';
import './Home.scss';

// Images
import blockOneImage from '../../../assets/images/prototype/product_strategy_session.png';
import blockTwoImage from '../../../assets/images/prototype/product_workshop.png';
import blockThreeImage from '../../../assets/images/prototype/product_q&a.png';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('LDJ / Home');
  }

  render() {
    const url = 'https://calendly.com/henry_latham/strategy-session';

    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="Build A High-Impact Roadmap in 60 Minutes"
          subtitle="No clear product strategy? Unable to prioritise? No idea how to iterate & test your product ideas? Book a FREE Strategy Call with us to learn how to build high-value, profitable products with our 60-minute workshops:"
          btnText="Book A Call"
          mixpanelEvent="Book Call"
          externalPage
          url={url}
        />
        <ProductShowcase
          header="Our Process For Building High-Value Products"
          blockOneHeader="Define A Clear Product Strategy"
          blockOneBody=" Join us for a free 1x1 strategy session to define a high-impact objective for the workshop"
          blockOneImage={blockOneImage}
          blockTwoHeader="Prioritise Your Roadmap in 60 Minutes"
          blockTwoBody="Align your teams around a clear strategic objective & define high-impact, low-effort features, validated with real customers"
          blockTwoImage={blockTwoImage}
          blockThreeHeader="No Idea How To Run Experiments & Measure Success?"
          blockThreeBody="Considering 50-70% of feature ideas will fail, it's essential you build a culture of experimentation & continuous improvement. Luckily, we are here to help."
          blockThreeImage={blockThreeImage}
          cta="Get Started >"
          url={url}
        />
        <Testimonials />
        <Footer page="HOME" />
      </div>
    );
  }
}
