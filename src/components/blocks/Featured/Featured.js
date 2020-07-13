// @flow
import React, { Component } from 'react';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
// import { Button } from '../../elements';
import { MailchimpForm } from '../../blocks';

import './Featured.scss';

type Props = {
  header: string,
  mixpanelEvent: string,
  facebookEvent: string,
  url: string,
  // btnText: string,
  subText: string,
  subTextUrl: string,
  subTextUrlText: string,
};

export default class Featured extends Component<Props> {
  render() {
    const {
      header,
      // btnText,
      url,
      subText,
      subTextUrl,
      subTextUrlText,
    } = this.props;

    return (
      <div className="featured">
        <p className="featured__header">{header}</p>
        <div className="featured__logos"></div>
        <h4 className="featured__cta">Learn how to join these alumni:</h4>
        <div className="featured__button">
          {
            // <a href={url} target="_blank" rel="noopener noreferrer">
            // <Button onClick={this.goToApplicationPage}>{btnText}</Button>
            // </a>
          }
          <MailchimpForm
            url={url}
            subText={subText}
            subTextUrl={subTextUrl}
            subTextUrlText={subTextUrlText}
          />
        </div>
      </div>
    );
  }
  goToApplicationPage = () => {
    Mixpanel.track(`${this.props.mixpanelEvent}`);
    FacebookPixel.track('track', `${this.props.facebookEvent}`);
  };
}
