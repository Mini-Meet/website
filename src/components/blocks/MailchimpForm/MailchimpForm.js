// @flow
import React, { Component } from 'react';
import LinkedInTag from 'react-linkedin-insight';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Link } from 'react-router-dom';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { Button, Loading } from '../../elements';

import brochurePdf from '../../../assets/pdf/prod-mba-brochure.pdf';

import './MailchimpForm.scss';

type Props = {
  subText: string,
  subTextUrl: string,
  subTextUrlText: string,
};

type FormTypes = {
  onSubscribe: Function,
};

const CustomForm = ({ onSubscribe }: FormTypes) => {
  let email;

  const submit = () => {
    if (email && email.value && email.value.indexOf('@') > -1) {
      Mixpanel.track(`7.MBA Subscribe`);
      FacebookPixel.track(`Subscribe`);

      onSubscribe({
        EMAIL: email.value,
      });
    }
  };

  return (
    <div className="mailchimp__form">
      <input
        ref={node => {
          email = node;
        }}
        type="email"
        placeholder="Enter your email"
      />
      <Button primary onClick={submit}>
        Get Free Brochure
      </Button>
    </div>
  );
};

export default class MailchimpForm extends Component<Props> {
  render() {
    const { subText, subTextUrl, subTextUrlText } = this.props;

    return (
      <div>
        <MailchimpSubscribe
          url="https://productmastery.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=10e19965fa"
          render={({ subscribe, status, message }) => (
            <div>
              {(!status || status === 'error') && (
                <CustomForm
                  status={status}
                  message={message}
                  onSubscribe={formData => subscribe(formData)}
                />
              )}
              {status === 'sending' && (
                <div className="mailchimp__form__loading">
                  <Loading dark />
                </div>
              )}
              {status === 'error' && (
                <p
                  className="mailchimp__form__error"
                  // eslint-disable-next-line
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === 'success' && (
                <div className="overlay">
                  <div className="overlay__content">
                    <div className="overlay__content_video wistia_responsive_padding">
                      <div className="wistia_responsive_wrapper">
                        <span className="wistia_embed wistia_async_hziirxzwao popover=true popoverAnimateThumbnail=true videoFoam=true">
                          &nbsp;
                        </span>
                      </div>
                    </div>
                    <p>
                      Now that you’ve touched the surface with our case study
                      above, if you feel ready to step up & rapidly become a
                      true product leader, book a strategy session with us to
                      see how we can help:
                    </p>
                    <a
                      href="https://calendly.com/henry_latham/prod-mba"
                      className="overlay__content_cta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button onClick={this.goToBookSession}>
                        Book Free Strategy Session
                      </Button>
                      <a
                        href={brochurePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button tertiary="tertiary" onClick={this.goToPdf}>
                          View Prod MBA Brochure
                        </Button>
                      </a>
                    </a>
                  </div>
                  {
                    // <iframe
                    //   title="Survey"
                    //   id="typeform-full"
                    //   width="100%"
                    //   height="200%"
                    //   frameBorder="0"
                    //   src="https://productmastery.typeform.com/to/fAD2UV"
                    // ></iframe>
                  }
                </div>
              )}
              {!status && (
                <p className="mailchimp__subtext">
                  {subText}
                  <Link
                    to={subTextUrl}
                    className="mailchimp__subtext_link"
                    onClick={this.goToSubTextLink}
                  >
                    {subTextUrlText}
                  </Link>
                </p>
              )}
            </div>
          )}
        />
      </div>
    );
  }

  goToSubTextLink = () => {
    Mixpanel.track('7. / Home Subtext Link');
  };

  goToBookSession = () => {
    Mixpanel.track('7. MBA / Book Call');
    FacebookPixel.track('SubmitApplication');
    LinkedInTag.track('2862329');
  };

  goToPdf = () => {
    Mixpanel.track('7. MBA / View PDF');
    FacebookPixel.track('Lead');
  };
}
