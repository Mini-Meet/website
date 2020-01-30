import React, { Component } from 'react';
import axios from 'axios';
import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';

import './SignUp.scss';

export default class SignUp extends Component {
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
      <div className="signup">
        {!isSubmitting && (
          <div className="signup__main">
            <input
              key="userEmail"
              type="email"
              placeholder="Enter your email"
              onChange={e => this.setState({ userEmail: e.target.value })}
            />

            <Button primary onClick={this.onSignUp}>
              Request Free Early Access
            </Button>
          </div>
        )}

        <div className="signup__state">
          {isSubmitting && (
            <p className="signup__state__submitting">Submitting...</p>
          )}
          {error && <p className="signup__state__error">{error}</p>}
        </div>

        <p className="signup__footnote">
          Access to the Public Beta is by invitation only. Request access today.
        </p>
      </div>
    );
  }

  onSignUp = () => {
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
        Mixpanel.track('PM Call: Signup');
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
