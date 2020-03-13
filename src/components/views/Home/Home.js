import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero, Featured, Footer } from '../../blocks';
import './Home.scss';

export default class LinkedIn extends Component {
  componentDidMount() {
    Mixpanel.track('MBA / Home');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="We Train Product Managers to Build The Next Big Thing"
          subtitle="Junior/Mid-Level PM stuck building ineffective features & frustrated in your current role? If you're interested in learning how to build great products, enjoy more autonomy & achieve rapid promotion, click the button below to learn more:"
          btnText="Join Waiting List"
          mixpanelEvent="MBA / Home / Click Case Study"
          nextpage
          nextpageUrl="/case-study"
        />
        <Featured header="Where our Product Masters Work" />
        <Footer page="HOME" />
      </div>
    );
  }
}
