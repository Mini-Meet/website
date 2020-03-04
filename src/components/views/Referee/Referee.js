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
          titleTwo="Product Career Now"
          subtitle="Invite your friends to join our Beta Programme & enjoy FREE product membership for 1 year. Skip the growing waiting list by entering your email below & inviting your friends:"
          refereeForm
        />
      </div>
    );
  }
}
