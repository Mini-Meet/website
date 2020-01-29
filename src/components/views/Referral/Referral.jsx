import React, { Component } from 'react';
import axios from 'axios';
import { get, filter } from 'lodash';
import { Header, ReferralBlock, Footer } from '../../blocks';

import './Referral.scss';

export default class Referral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      statistics: [],
      referralLink: get(props, ['match', 'params', 'referralLink']),
    };
  }
  componentWillMount() {
    this.getStatistics(this.state.referralLink);
  }

  render() {
    const { statistics, referralLink } = this.state;
    console.debug('STAT: ', statistics);
    const rank = get(statistics, [0, 'rid'], 0);
    const email = get(statistics, [0, 'referrer_email'], '');
    const acceptedReferrals = filter(
      statistics,
      statistic => statistic.is_accepted
    );
    return (
      <div>
        <Header dark />
        <div className="referral">
          <div className="referral__queue">
            <h5>{`You are #${rank + 374} on the community waiting list`}</h5>
            <p>{`This reservation is held for ${email}`}</p>
          </div>
          <div className="referral__share">
            <h3>Want to cut the line and get instant access?</h3>
            <p>
              Invite 5 of your friends below for 1 year of <b>FREE</b> instant
              access to the community & our PM tool:
            </p>
            <ReferralBlock referralLink={referralLink} />
          </div>
          <div className="referral__referrals">
            <h5>{`So far you have ${acceptedReferrals.length} referrals`}</h5>
            <p className="small">
              Refer 5 friends to get FREE Instant Access. Track which friends
              have successfully signed up, as well as where you are on the
              waiting list, by visiting this URL
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  getStatistics = referralLink => {
    axios
      .get(`https://tt-media.hr/public/api/referrals/${referralLink}`, {})
      .then(response => {
        if (response.data.hasError) {
          this.setState({
            error: response.data.errMessage,
            isSubmitting: false,
          });
          return;
        }
        this.setState({
          statistics: response.data.statistics,
        });
      })
      .catch(error => {
        this.setState({
          error: 'An error ocurred!',
        });
      });
  };
}
