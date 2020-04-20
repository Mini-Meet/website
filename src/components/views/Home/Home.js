import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero, Featured, Footer } from '../../blocks';
import './Home.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('Course / Home');
  }

  render() {
    // const url = '/case-study';

    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="We Teach You to Build a Profitable Product in 6 weeks"
          subtitle="Worried about your job security or levelling up your CV? Want to start a side hustle or your own business? Join our mini Product MBA programme to deliver a real, revenue-generating product in 6 weeks:"
          btnText="Get Your Free Case Study"
          mailchimpForm
        />
        <Featured header="Built With Product Leaders From:" />
        <Footer page="HOME" />
      </div>
    );
  }
}
