// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';

import { Header } from '../../blocks';

import './Checkout.scss';

export default class Checkout extends Component {
  componentDidMount() {
    Mixpanel.track('MBA / Checkout');
  }

  render() {
    return (
      <div>
        <Header light />
      </div>
    );
  }
}
