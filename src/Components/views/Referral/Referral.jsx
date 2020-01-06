import React, { Component } from 'react';

import { Header, ReferralBlock, Footer } from '../../blocks';

import './Referral.scss';

export default class Referral extends Component {
  render() {
    return (
      <div>
        <Header dark />
        <div className="referral">
          <div className="referral__queue">
            <h5>You are #44 on the waiting list</h5>
            <p>This reservation is held for test@gmail.com</p>
          </div>
          <div className="referral__share">
            <h3>Want to cut the line and get instant access?</h3>
            <p>
              Invite 5 of your friends below for 1 year of FREE instant access:
            </p>
            <ReferralBlock />
          </div>
          <div className="referral__referrals">
            <h5>So far you have 1 referrals</h5>
            <p className="small">Refer 5 friends to get FREE Instant Access</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
