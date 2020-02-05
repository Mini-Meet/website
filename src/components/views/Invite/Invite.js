import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, HeroInvite } from '../../blocks';
import './Invite.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('PM.c Signup: Invite');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header light />
        <HeroInvite isFirstHero />
      </div>
    );
  }
}
