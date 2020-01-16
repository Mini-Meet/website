import React, { Component } from 'react';
import { get } from 'lodash';
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
      statistics: {},
      statisticsError: false,
      success: false,
    };
  }

  componentWillMount() {
    this.getStatistics(this.props.referralLink);
  }

  render() {
    const { error, isSubmitting, success, statisticsError } = this.state;
    if (statisticsError) {
      return (
        <div className="refer">
          <div
            className="refer__main"
            style={{ textAlign: 'center', display: 'block' }}
          >
            <h3>{statisticsError}</h3>
          </div>
        </div>
      );
    }
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
          {success && (
            <p className="refer__state__success">
              Referral link successfully sent
            </p>
          )}
        </div>
      </div>
    );
  }

  onSendReferralLink = () => {
    const { referralEmail, statistics } = this.state;
    this.setState({
      error: null,
      isSubmitting: true,
      success: false,
    });

    axios
      .post('https://tt-media.hr/public/api/referrals/send-link', {
        referrerEmail: get(statistics, [0, 'referrer_email']),
        referralEmail,
      })
      .then(response => {
        if (response.data.hasError) {
          this.setState({
            error: response.data.errMessage,
            isSubmitting: false,
            success: false,
          });
          return;
        }
        Mixpanel.track('HR/A: Referral link sent!');
        this.getStatistics(this.props.referralLink);
        this.setState({
          isSubmitting: false,
          success: true,
        });
      })
      .catch(error => {
        this.setState({
          error: 'An error ocurred!',
          isSubmitting: false,
          success: false,
        });
      });
  };

  getStatistics = referralLink => {
    axios
      .get(`https://tt-media.hr/public/api/referrals/${referralLink}`, {})
      .then(response => {
        if (response.data.hasError) {
          this.setState({
            statisticsError: response.data.errMessage,
            isSubmitting: false,
          });
          return;
        }
        this.setState({
          statisticsError: false,
          statistics: response.data.statistics,
          isSubmitting: false,
        });
      })
      .catch(error => {
        this.setState({
          statisticsError: 'An error ocurred!',
          isSubmitting: false,
        });
      });
  };
}
