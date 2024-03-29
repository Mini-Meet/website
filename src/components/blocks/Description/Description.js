// @flow
import React, { Component } from 'react';
// import { FacebookPixel } from '../../../FacebookPixel';
// import { Mixpanel } from '../../../Mixpanel';
import { ActiveCampaignForm, MailchimpForm } from '..';
import { ButtonNextPage } from '../../elements';

import './Description.scss';

type Props = {
  reverse: boolean,
  header: string,
  description1: string,
  description2: string,
  description3: string,
  image: string,
  imageAltText: string,
  btnText: string,
  nextPageUrl: string,
  onClick: Function,
  activeCampaignForm: boolean,
  formId: Number,
  submitEmail: Function,
  buttonNext: boolean,
  //
  mailchimpForm: boolean,
  subText: string,
  subTextUrl: string,
  subTextUrlText: string,
  accelerator: boolean,
};

export default class Description extends Component<Props> {
  render() {
    const {
      reverse,
      header,
      description1,
      description2,
      description3,
      image,
      imageAltText,
      btnText,
      nextPageUrl,
      onClick,
      activeCampaignForm,
      formId,
      submitEmail,
      buttonNext,
      //
      mailchimpForm,
      subText,
      subTextUrl,
      subTextUrlText,
      accelerator,
    } = this.props;

    return (
      <div>
        {!reverse && (
          <div className="description">
            <div className="description__text">
              <h3 className="description__text_header">{header}</h3>
              <div className="description__text_main">
                <p>{description1}</p>
                <br />
                <p>{description2}</p>
                <br />
                <p>{description3}</p>
                <div className="description__button">
                  {buttonNext && (
                    <ButtonNextPage
                      nextPageUrl={nextPageUrl}
                      onClick={onClick}
                      btnText={btnText}
                    />
                  )}
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
              </div>
            </div>

            <div className="description__imgblock">
              <img
                alt={imageAltText}
                src={image}
                className="description__imgblock_img"
              />
            </div>
          </div>
        )}
        {reverse && (
          <div className="description description__reverse">
            <div className="description__imgblock">
              <img
                alt={imageAltText}
                src={image}
                className="description__imgblock_img"
              />
            </div>

            <div className="description__text description__text_reverse">
              <h3 className="description__text_header">{header}</h3>
              <div className="description__text_main">
                <p>{description1}</p>
                <br />
                <p>{description2}</p>
                <br />
                <p>{description3}</p>
                <div className="description__button">
                  {buttonNext && (
                    <ButtonNextPage
                      nextPageUrl={nextPageUrl}
                      onClick={onClick}
                      btnText={btnText}
                    />
                  )}
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
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // goToApplicationPage = () => {
  //   Mixpanel.track(`${this.props.mixpanelEvent}`);
  //   FacebookPixel.track('track', `${this.props.facebookEvent}`);
  // };
}
