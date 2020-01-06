import React, { Component } from 'react';
import axios from 'axios';
import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';

import './ReferralBlock.scss';

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
      <div className="refer">
        {!isSubmitting && (
          <div className="refer__main">
            {
              // <input
              //   key="userEmail"
              //   type="email"
              //   placeholder="Enter your email"
              //   onChange={e => this.setState({ userEmail: e.target.value })}
              // />
            }

            <input
              key="referralEmail"
              type="email"
              placeholder="Enter referral email"
              onChange={e => this.setState({ referralEmail: e.target.value })}
            />
            <Button primary onClick={this.onSendReferralLink}>
              Send Invite
            </Button>
          </div>
        )}

        <div className="refer__state">
          {isSubmitting && (
            <p className="refer__state__submitting">Submitting...</p>
          )}
          {error && <p className="refer__state__error">{error}</p>}
        </div>
      </div>
    );
  }

  onSendReferralLink = () => {
    const { referralEmail } = this.state;
    // if (!userEmail || !referralEmail) {
    //   this.setState({
    //     error: 'Please enter both emails',
    //     isSubmitting: false,
    //   });
    //   return;
    // }

    this.setState({
      error: null,
      isSubmitting: true,
    });

    axios
      .post('https://tt-media.hr/public/api/set-refferal', {
        // referrerEmail: userEmail,
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
