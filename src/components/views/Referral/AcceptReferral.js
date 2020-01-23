import React, { Component } from 'react';
import { get } from 'lodash';
import axios from 'axios';
import { Mixpanel } from '../../../Mixpanel';

import './Referral.scss';

export default class AcceptReferral extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }
  componentWillMount() {
    const referralLink = get(this.props, ['match', 'params', 'referralLink']);
    if (!referralLink) {
      this.setState({ error: 'Link is not valid' });
      return;
    }
    axios
      .post(
        `https://tt-media.hr/public/api/referrals/accept/${referralLink}`,
        {}
      )
      .then(response => {
        if (response.data.hasError) {
          this.setState({ error: response.data.errMessage });
          return;
        }
        // Success response - redirect and set tracker
        Mixpanel.track(`Guide/A: Referral accepted: ${referralLink}`);
        window.location.href = '/home';
      })
      .catch(() => {
        this.setState({ error: 'Link is not valid' });
      });
  }

  render() {
    const { error } = this.state;
    if (!error) return <div></div>;
    return (
      <div className="referral__share accept">
        <h3>{error}</h3>
      </div>
    );
  }
}