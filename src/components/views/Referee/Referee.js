import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero } from '../../blocks';

import './Referee.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('A / Page / Referee');
  }

  render() {
    return (
      <div className="refereeContainer">
        <Header light />
        <Hero
          title="Upgrade Your"
          titleTwo="Product Career For FREE"
          subtitle="Invite 5 friends to join our Beta programme & enjoy FREE access to our Product Mastery Programme (saving €999!) & skip the waiting list"
          btnText="Save"
          mixpanelEvent="Referee / Subscribed!"
          referralForm
        />
      </div>
    );
  }
}
