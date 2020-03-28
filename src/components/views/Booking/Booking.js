// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
// import { Loading } from '../../elements';
import { Header } from '../../blocks';

import './Booking.scss';

export default class Booking extends Component<Props> {
  componentDidMount() {
    Mixpanel.track('Remote / Booking');

    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }

  render() {
    return (
      <div>
        <Header light />
        <div className="booking">
          <div
            className="calendly-inline-widget booking__widget"
            data-url="https://calendly.com/henry_latham/strategy-session"
          ></div>
        </div>
      </div>
    );
  }

  goToBookSession = () => {
    Mixpanel.track('Remote / Casestudy / Click Book Session');
  };
}