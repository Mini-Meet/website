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
  //
  activeCampaignForm: boolean,
  formId: Number,
  submitEmail: Function,
  subText: string,
  subTextUrl: string,
  subTextUrlText: string,
};

export default class Featured extends Component<Props> {
  render() {
    const {
      header,
      btnText,
      nextPageUrl,
      onClick,
      buttonNext,
      ctaSupportText,
      //
      activeCampaignForm,
      formId,
      submitEmail,
    } = this.props;

    return (
      <div className="featured">
        <p className="featured__header">{header}</p>
        <div className="featured__logos"></div>
        <h4 className="featured__cta">Learn how to join these alumni:</h4>
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
            <ActiveCampaignForm formId={formId} submitEmail={submitEmail} />
          )}
        </div>
      </div>
    );
  }
}
