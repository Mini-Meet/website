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
  url: string,
  nextPage: boolean,
  nextPageUrl: string,
  onClick: Function,
  externalPage: boolean,
  referralForm: boolean,
  mailchimpForm: boolean,
  mixpanelEvent: string,
  facebookEvent: string,
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
      referralForm,
      mailchimpForm,
      url,
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

        {referralForm && <RefereeInput mixpanelEvent="0. Referral Subscribe" />}

        {mailchimpForm && (
          <MailchimpForm
            url={url}
            subText={subText}
            subTextUrl={subTextUrl}
            subTextUrlText={subTextUrlText}
          />
        )}
      </div>
    );
  }

  goToSubTextLink = () => {
    Mixpanel.track('1. / Home Subtext Link');
  };

  goToExternalLink = () => {
    Mixpanel.track(`${this.props.mixpanelEvent}`);
    FacebookPixel.track(`${this.props.facebookEvent}`);
  };
}
