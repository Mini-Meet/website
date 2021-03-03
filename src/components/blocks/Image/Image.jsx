// @flow
import React, { Component } from 'react';
import { ActiveCampaignForm } from '..';

import './Image.scss';

type Props = {
  title: string,
  imgDesktop: string,
  imgMobile: string,
  activeCampaignForm: boolean,
  formId: Number,
  submitEmail: Function,
  ctaHeader: string,
  ctaSupportText: string,
};

export default class Card extends Component<Props> {
  render() {
    const {
      title,
      imgDesktop,
      imgMobile,
      activeCampaignForm,
      formId,
      submitEmail,
      ctaSupportText,
      ctaHeader,
    } = this.props;

    return (
      <div className="imgFullWidth">
        <h3>{title}</h3>
        <picture>
          <source srcSet={imgDesktop} media="(min-width: 500px)" />
          <img alt="profile pic" src={imgMobile} />
        </picture>
        {activeCampaignForm && (
          <div className="imgFullWidth__cta">
            <h4 className="curriculum__cta">{ctaHeader}</h4>
            <p className="curriculum__small">{ctaSupportText}</p>
            <ActiveCampaignForm formId={formId} submitEmail={submitEmail} />
          </div>
        )}
      </div>
    );
  }
}
