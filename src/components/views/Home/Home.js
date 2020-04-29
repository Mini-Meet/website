import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero, Footer } from '../../blocks';
import './Home.scss';

const url =
  'https://productmastery.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=10e19965fa';

const mixpanelPageEvent = 'MBA / Home';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track({ mixpanelPageEvent });
  }

  render() {
    // const url = '/case-study';

    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="We Teach You to Build a Profitable Product in 6 weeks"
          subtitle="Worried about your job security or levelling up your CV? Want to start a side hustle or your own business? Join our mini Prod MBA programme to deliver a real, revenue-generating product in 6 weeks:"
          btnText="Join Mini MBA"
          subText="Access to the Prod MBA is now open:  "
          subTextUrl="/product-mba"
          subTextUrlText="Apply Now"
          mixpanelPageEvent={mixpanelPageEvent}
          mailchimpForm
          url={url}
        />
        <Footer page="HOME" />
      </div>
    );
  }
}
