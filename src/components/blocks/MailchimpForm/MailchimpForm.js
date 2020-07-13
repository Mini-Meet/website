// @flow
import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Link } from 'react-router-dom';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { Button, Loading } from '../../elements';

import './MailchimpForm.scss';

type Props = {
  subText: string,
  subTextUrl: string,
  subTextUrlText: string,
  url: string,
};

type FormTypes = {
  onSubscribe: Function,
};

const CustomForm = ({ onSubscribe }: FormTypes) => {
  let email;

  const submit = () => {
    if (email && email.value && email.value.indexOf('@') > -1) {
      Mixpanel.track(`1. MBA Subscribe`);
      FacebookPixel.track('Lead');

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
    const { subText, subTextUrl, subTextUrlText, url } = this.props;

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
                <div>
                  <div className="mailchimp__form__success">
                    Successfully added! Check your email to download our
                    brochure
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
    Mixpanel.track('1. / Home Subtext Link');
  };
}
