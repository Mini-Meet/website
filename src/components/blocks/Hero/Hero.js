// @flow
import React, { Component } from 'react';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { MailchimpForm, RefereeInput } from '..';
import { Button, ButtonNextPage } from '../../elements';
import './Hero.scss';

type Props = {
  title: string,
  titleTwo: string,
  subtitle: string,
  btnText: string,
  subText: string,
  subTextUrl: string,
  subTextUrlText: string,
  nextPage: boolean,
  nextPageUrl: string,
  onClick: Function,
  externalPage: boolean,
  url: string,
  referralForm: boolean,
  mailchimpForm: boolean,
  mixpanelEvent: boolean,
  facebookEvent: boolean,
};

export default class Hero extends Component<Props> {
  render() {
    const {
      title,
      titleTwo,
      subtitle,
      btnText,
      subText,
      subTextUrl,
      subTextUrlText,
      nextPage,
      nextPageUrl,
      onClick,
      externalPage,
      url,
      referralForm,
      mailchimpForm,
    } = this.props;

    return (
      <div className="hero">
        <div className="hero__header">
          <h1>{title}</h1>
          <h1>{titleTwo}</h1>
          <p>{subtitle}</p>
        </div>

        {nextPage && (
          <div className="hero__nextPage">
            <ButtonNextPage
              nextPageUrl={nextPageUrl}
              onClick={onClick}
              btnText={btnText}
            />
          </div>
        )}

        {externalPage && (
          <div className="hero__external">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button onClick={this.goToExternalLink}>{btnText}</Button>
            </a>
          </div>
        )}

        {referralForm && <RefereeInput mixpanelEvent="4. Referral Subscribe" />}

        {mailchimpForm && (
          <MailchimpForm
            subText={subText}
            subTextUrl={subTextUrl}
            subTextUrlText={subTextUrlText}
          />
        )}
      </div>
    );
  }

  goToSubTextLink = () => {
    Mixpanel.track('5. / MBA Subtext Link');
  };

  goToExternalLink = () => {
    Mixpanel.track(`${this.props.mixpanelEvent}`);
    FacebookPixel.track(`${this.props.facebookEvent}`);
  };
}
