import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero, Featured, Footer } from '../../blocks';
import './Home.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('Remote / Home');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="We Coach Product Leaders to Thrive in A Remote, Uncertain World"
          subtitle="Worried about your job security during The Covid Crisis? About how to adapt your product to a new reality? Urgently need to adapt your management style in a remote world? Learn how to turn crisis into opportunity with our training programme, teaching you how to run effective, adaptable, remote product teams:"
          btnText="Your Free Case Study"
          mixpanelEvent="Home / Click Webinar"
          nextpage
          nextpageUrl="/case-study"
        />
        <Featured header="Where our Product Masters Work" />
        <Footer page="HOME" />
      </div>
    );
  }
}
