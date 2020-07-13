import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero, Footer } from '../../blocks';
import './Home.scss';

const url =
  'https://productmastery.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=10e19965fa';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('1. Home');
  }

  render() {
    // const url = '/case-study';

    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="Build a Profitable Product in 6 weeks With the Prod MBA"
          subtitle="Worried about your job security or levelling up your CV? Want to start a side hustle or your own business? Learn more about our 6-week Prod MBA programme here:" // Sign up for our free Mini MBA programme to learn how to deliver a real, revenue-generating product in 6 weeks:
          btnText="View Prod MBA Programme"
          nextpage
          nextpageUrl="/prod-mba"
          url={url}
          mixpanelEvent="0. Home / View Prod MBA"
          // subText="Applications for the Prod MBA are currently closed:  "
          // subTextUrl="/prod-mba"
          // subTextUrlText="Learn More"
        />
        <Footer page="HOME" />
      </div>
    );
  }
}
