import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, HeroReferee } from '../../blocks';

import './Referee.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('A / Page / Referee');
  }

  render() {
    return (
      <div className="refereeContainer">
        <Header light />
        <HeroReferee isFirstHero />
      </div>
    );
  }
}
