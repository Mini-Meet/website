import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import {
  Header,
  Hero,
  Featured,
  Footer,
  ProductShowcase,
  Testimonials,
} from '../../blocks';
import './Home.scss';

// Images
import blockOneImage from '../../../assets/images/prototype/product_slack.png';
import blockTwoImage from '../../../assets/images/prototype/product_upvote.png';
import blockThreeImage from '../../../assets/images/prototype/product_q&a.png';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('Slack / Home');
  }

  render() {
    const url =
      'https://productmastery.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04';

    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="Master product management with just 5 minutes a week"
          subtitle="Worried about your job security during The Covid Crisis? Urgently need to adapt? Double your salary as a Product Manager within 1-2 years & learn how to build great products, quickly, with our online coaching tool:"
          btnText="Try Free Slack Coach"
          // mixpanelEvent="Home / Click Slack"
          mailchimpForm
          url={url}
        />
        <Featured header="Where our Product Masters Work" />
        <ProductShowcase
          header="Your Secret Weapon For Better Product Work"
          blockOneHeader="1 Relevant, High-Impact Lesson per Week"
          blockOneBody=" Rather than spending €5k on a useless course, get actionable, high-impact advice on challenges you are currently facing each week"
          blockOneImage={blockOneImage}
          blockTwoHeader="Overcome Any Challanges You Face"
          blockTwoBody="Submit questions or upvote others’ questions to get real answers to real questions you are currently facing"
          blockTwoImage={blockTwoImage}
          blockThreeHeader="Live Mentorship Sessions"
          blockThreeBody="Join our weekly, live Q&A Sessions, where we’ll be answering the most-voted questions & case studies from our community of PMs"
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
