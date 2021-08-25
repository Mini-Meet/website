// @flow
import React, { Component } from 'react';
// import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { MailchimpForm, ActiveCampaignForm, RefereeInput } from '..';
import { Button } from '../../elements';
import './Hero.scss';

type Props = {
  title: string,
  subtitleOne: string,
  subtitleTwo: string,
  btnText: string,
  accelerator: boolean,
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
  activeCampaignForm: boolean,
  formId: Number,
  submitEmail: Function,
  accelerator: boolean,
};

export default class Hero extends Component<Props> {
  render() {
    const {
      title,
      subtitleOne,
      subtitleTwo,
      btnText,
      accelerator,
      subText,
      subTextUrl,
      subTextUrlText,
      nextPage,
      onClick,
      externalPage,
      url,
      referralForm,
      mailchimpForm,
      activeCampaignForm,
      formId,
      submitEmail,
    } = this.props;

    const heroBackgroundClass = accelerator ? 'hero heroAccelerator' : 'hero';

    return (
      <div className={heroBackgroundClass}>
        <div className="hero__header">
          <h1>{title}</h1>
          <p className="hero__header_large">{subtitleOne}</p>
          <p className="hero__header_small">{subtitleTwo}</p>
        </div>

        {nextPage && (
          <div className="hero__nextPage">
            <Button onClick={onClick}>{btnText}</Button>
          </div>
        )}

        {externalPage && (
          <div className="hero__external">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button onClick={onClick}>{btnText}</Button>
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

        {activeCampaignForm && (
          <ActiveCampaignForm
            formId={formId}
            submitEmail={submitEmail}
            accelerator={accelerator}
          />
        )}
      </div>
    );
  }

  goToSubTextLink = () => {
    Mixpanel.track('12. / MBA Subtext Link');
  };
}
