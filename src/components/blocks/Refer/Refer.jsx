import React, { Component } from 'react';
import axios from 'axios';
import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';

import './Refer.scss';

export default class Refer extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: null,
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
            <input
              key="userEmail"
              type="email"
              placeholder="Enter your email"
              onChange={e => this.setState({ userEmail: e.target.value })}
            />

            <Button primary onClick={this.onRefer}>
              Request Free Early Access
            </Button>
          </div>
        )}

        <div className="refer__state">
          {isSubmitting && (
            <p className="refer__state__submitting">Submitting...</p>
          )}
          {error && <p className="refer__state__error">{error}</p>}
        </div>

        <p className="refer__footnote">
          Access to the Public Beta is by invitation only. Request access today.
        </p>
      </div>
    );
  }

  onRefer = () => {
    const { userEmail } = this.state;

    this.setState({
      error: null,
      isSubmitting: true,
    });

    axios
      .post('https://tt-media.hr/public/api/add-user', {
        userEmail,
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
        Mixpanel.track('PM.c Signup: Signup');
        window.location.href = `/statistics/${response.data.user.referral_link}`;
      })
      .catch(error => {
        this.setState({
          error: 'An error ocurred!',
          isSubmitting: false,
        });
      });
  };
}
