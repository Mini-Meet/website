import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';
import './ReferralBlock.scss';
import axios from 'axios';
export default class ReferralBlock extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: null,
      referralEmail: null,
      error: null,
      isSubmitting: false,
    };
  }

  render() {
    const { error, isSubmitting } = this.state;
    return (
      <div className="referral">
        <div key={this.props.key}>
          <div className="referral__header">
            <h1>Referre a friend</h1>
            <p>Send invitation link and earn rewards</p>
          </div>
        </div>

        <input
          key="userEmail"
          type="email"
          placeholder="Enter your email"
          onChange={e => this.setState({ userEmail: e.target.value })}
        />

        <input
          key="referralEmail"
          type="email"
          placeholder="Enter referral email"
          onChange={e => this.setState({ referralEmail: e.target.value })}
        />

        <br />

        {isSubmitting && <p className="isSubmitting">Submitting...</p>}
        {error && <p className="error">{error}</p>}

        <Button primary onClick={this.onSendReferralLink}>
          Request Free Early Access
        </Button>
      </div>
    );
  }

  onSendReferralLink = () => {
    const { userEmail, referralEmail } = this.state;
    if (!userEmail || !referralEmail) {
      this.setState({
        error: 'Please enter both emails',
        isSubmitting: false,
      });
      return;
    }

    this.setState({
      error: null,
      isSubmitting: true,
    });

    axios
      .post('https://tt-media.hr/public/api/set-refferal', {
        referrerEmail: userEmail,
        referralEmail,
      })
      .then(response => {
        if (response.data.hasError) {
          this.setState({
            error: response.data.errMessage,
            isSubmitting: false,
          });
          return;
        }
        // Success response - redirect and set tracker
        Mixpanel.track('HR/A: Referral link sent!');
        window.location.href = '/referral-success';
      })
      .catch(function(error) {
        this.setState({
          error: 'An error ocurred!',
          isSubmitting: false,
        });
      });
  };
}
