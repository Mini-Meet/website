import React, { Component } from 'react';
import { get, map, isArray, without } from 'lodash';
import axios from 'axios';
import { Mixpanel } from '../../../Mixpanel';
import { Button, Icon } from '../../elements';

import './ReferralBlock.scss';

export default class ReferralBlock extends Component {
  constructor() {
    super();
    this.state = {
      referralEmails: [],
      error: null,
      isSubmitting: false,
      statistics: {},
      statisticsError: false,
      success: false,
      numberOfEmails: 1,
    };
  }

  componentWillMount() {
    this.getStatistics(this.props.referralLink);
  }

  render() {
    const {
      error,
      isSubmitting,
      success,
      statisticsError,
      numberOfEmails,
      referralEmails,
    } = this.state;
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

    const emailInputs = [];

    for (let i = 0; i < numberOfEmails; i++) {
      emailInputs.push(
        <div className="refer__main">
          <input
            key={`referralEmail-${i}`}
            type="email"
            placeholder="Enter email"
            value={referralEmails[i] || ''}
            onChange={e => this.onChangeEmail(e.target.value, i)}
          />
          {i !== 0 && (
            <Icon
              icon="close"
              classOverride="refer__removeField"
              onClick={this.onRemoveEmailField.bind(this, i)}
            />
          )}
        </div>
      );
    }
    return (
      <div key="block" className="refer">
        {!isSubmitting && [
          map(emailInputs, el => el),
          <div key="actions" className="refer__addMore__block">
            {numberOfEmails < 5 && (
              <Button
                quarternary="quarternary"
                className="refer__addMore"
                onClick={this.onAddMoreEmails}
              >
                + Add more
              </Button>
            )}
            <Button primary onClick={this.onSendReferralLink}>
              Send Invites
            </Button>
          </div>,
        ]}

        <div className="refer__state">
          {isSubmitting && (
            <p className="refer__state__submitting">Submitting...</p>
          )}
          {error && !isArray(error) && (
            <p className="refer__state__error">{error}</p>
          )}
          {error &&
            isArray(error) &&
            map(error, (er, key) => (
              <p key={key} className="refer__state__error">
                {er}
              </p>
            ))}
          {success && (
            <p className="refer__state__success">
              Referral links successfully sent
            </p>
          )}
        </div>
      </div>
    );
  }

  onSendReferralLink = () => {
    const { statistics, referralEmails } = this.state;
    if (referralEmails.length === 0) {
      this.setState({ error: 'Enter at least one email!' });
      return;
    }
    this.setState({
      error: null,
      isSubmitting: true,
      success: false,
    });

    axios
      .post('https://tt-media.hr/public/api/referrals/send-link', {
        referrerEmail: get(statistics, [0, 'referrer_email']),
        referralEmails,
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
        Mixpanel.track('PM.c Signup: Referral sent');
        this.getStatistics(this.props.referralLink);
        this.setState({
          error: response.data.data.failureMessages,
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

  onAddMoreEmails = () => {
    this.setState({
      numberOfEmails: this.state.numberOfEmails + 1,
    });
  };

  onRemoveEmailField = index => {
    const toRemove = this.state.referralEmails[index];
    this.setState({
      referralEmails: without(this.state.referralEmails, toRemove),
      numberOfEmails: this.state.numberOfEmails - 1,
    });
  };

  onChangeEmail = (value, index) => {
    let emails = this.state.referralEmails;
    emails[index] = value;
    this.setState({
      referralEmails: emails,
    });
  };
}
