// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

import { Header } from '../../blocks';

// import CheckoutForm from './CheckoutForm';

import './Checkout.scss';

// const stripePromise = loadStripe("pk_live_Tvv8mdtEo3JeO2hb7plXSirc00Sh4iQnIh");

export default class Checkout extends Component<Props> {
  componentDidMount() {
    Mixpanel.track('MBA / Checkout');
  }

  render() {
    return (
      <div>
        <Header light />
        //{' '}
        <Elements stripe={stripePromise}>
          // <CheckoutForm />
          //{' '}
        </Elements>
      </div>
    );
  }
}
