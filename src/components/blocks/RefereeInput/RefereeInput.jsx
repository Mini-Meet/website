import React, { Component } from 'react';
import axios from 'axios';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';

import './RefereeInput.scss';

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
      <div className="refereeInput">
        {!isSubmitting && (
          <div className="refereeInput__main">
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

        <div className="refereeInput__state">
          {isSubmitting && (
            <div className="refereeInput__state__submitting">
              <Loader
                type="Triangle" // or "Grid"
                color="#fff"
                height={60}
                width={60}
                timeout={3000}
              />
            </div>
          )}
          {error && <p className="refereeInput__state__error">{error}</p>}
        </div>

        <p className="refereeInput__footnote">
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
