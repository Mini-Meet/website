// @flow
import React, { Component } from 'react';
import { ButtonNextPage } from '../../elements';
import { ActiveCampaignForm } from '..';

import './Featured.scss';

type Props = {
  header: string,
  btnText: string,
  nextPageUrl: string,
  onClick: Function,
  buttonNext: boolean,
  ctaSupportText: string,
  ctaHeader: string,
  //
  activeCampaignForm: boolean,
  formId: Number,
  submitEmail: Function,
  subText: string,
  subTextUrl: string,
  subTextUrlText: string,
  accelerator: boolean,
};

export default class Featured extends Component<Props> {
  render() {
    const {
      header,
      btnText,
      accelerator,
      nextPageUrl,
      onClick,
      buttonNext,
      ctaSupportText,
      ctaHeader,
      //
      activeCampaignForm,
      formId,
      submitEmail,
    } = this.props;

    const featuredLogos = accelerator
      ? 'featured__logos featured__accel'
      : 'featured__logos';

    return (
      <div className="featured">
        <p className="featured__header">{header}</p>
        <div className={featuredLogos}></div>
        <h4 className="featured__cta">{ctaHeader}</h4>
        <p className="featured__small">{ctaSupportText}</p>
        <div className="featured__button">
          {buttonNext && (
            <ButtonNextPage
              nextPageUrl={nextPageUrl}
              onClick={onClick}
              btnText={btnText}
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
      </div>
    );
  }
}
