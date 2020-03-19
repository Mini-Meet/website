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
          title="We Empower Product Leaders to Prosper in A Remote, Uncertain World"
          subtitle="Worried about your job security during The Covid Crisis? About how to adapt your product to a new reality? Urgently need to adapt your management style in a remote world? Learn how to turn crisis into opportunity with our free webinar, teaching you how to run effective, adaptable, remote product teams:"
          btnText="Join Free Webinar"
          mixpanelEvent="Home / Click Webinar"
          typeform
          url="https://product-mastery.webinargeek.com/how-your-product-team-can-prosper-in-a-remote-uncertain-world"
        />
        <Featured header="Where our Product Masters Work" />
        <Footer page="HOME" />
      </div>
    );
  }
}
