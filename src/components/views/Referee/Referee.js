import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero } from '../../blocks';

import './Referee.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('Slack / Page / Referee');
  }

  render() {
    return (
      <div className="refereeContainer">
        <Header light />
        <Hero
          title="Upgrade Your"
          titleTwo="Product Career Now"
          subtitle="Invite 5 friends to join our Beta programme, skip the waiting list & enjoy 70% 0FF our Product Mastery Programme (saving €700!) when they accept!"
          btnText="Next"
          mixpanelEvent="Referee / Subscribed!"
          referralForm
        />
      </div>
    );
  }
}
