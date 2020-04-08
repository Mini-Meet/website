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
// import blockOneImage from '../../../assets/images/prototype/product_slack.png';
// import blockTwoImage from '../../../assets/images/prototype/product_upvote.png';
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
          header="Our Process"
          blockOneHeader="Product Leaders With No Clear Strategy?"
          blockOneBody=" We start with a 1-hour strategy call to understand your current business challenges"
          blockOneImage={blockThreeImage}
          blockTwoHeader="PM Not Sure How To Prioritise?"
          blockTwoBody="We help you create a framework for strong, autonomous decision-making"
          blockTwoImage={blockThreeImage}
          blockThreeHeader="No Idea How To Experiment & Measure Success?"
          blockThreeBody="We set up an iterative, ongoing process of continuous improvemnet"
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
