import React, { Component } from 'react';

import Footer from '../../blocks/Footer/Footer.jsx';

export default class ReferralSuccess extends Component {
  render() {
    return (
      <div>
        <h1>Referral link successfully sent!</h1>
        <Footer page={'ABOUT'} />
      </div>
    );
  }
}
