// @flow
import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Mixpanel } from '../../../Mixpanel';
import { Button, Loading } from '../../elements';
import { RefereeInput } from '..';
import './Hero.scss';

type Props = {
  title: string,
  titleTwo: string,
  subtitle: string,
  url: string,
  mixpanelEvent: string,
  typeform: boolean,
  referralForm: boolean,
  mailchimpForm: boolean,
};

type FormTypes = {
  onSubscribe: Function,
};

const CustomForm = ({ onSubscribe }: FormTypes) => {
  let email;
  const submit = () => {
    // Mixpanel.track(`B / ${mixpanelEvent}`);

    if (email && email.value && email.value.indexOf('@') > -1) {
      onSubscribe({
        EMAIL: email.value,
      });
    }
  };

  return (
    <div className="hero__form">
      <input
        ref={node => {
          email = node;
        }}
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <Button primary onClick={submit}>
        Join Waiting List
      </Button>
    </div>
  );
};

export default class Hero extends Component<Props> {
  render() {
    const {
      title,
      titleTwo,
      subtitle,
      typeform,
      referralForm,
      mixpanelEvent,
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

        {typeform && (
          <div className="hero__typeform">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button onClick={this.goToTypeform}>
                Become a Product Mentor
              </Button>
            </a>
          </div>
        )}

        {referralForm && <RefereeInput mixpanelEvent={mixpanelEvent} />}

        {mailchimpForm && (
          <MailchimpSubscribe
            url={url}
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
                  <div className="hero__form__loading">
                    <Loading dark />
                  </div>
                )}
                {status === 'error' && (
                  <p
                    className="hero__form__error"
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === 'success' && (
                  <div>
                    <div className="hero__form__loading">
                      <Loading dark />
                    </div>
                    <iframe
                      title="Survey"
                      id="typeform-full"
                      width="100%"
                      height="200%"
                      frameBorder="0"
                      src="https://productmastery.typeform.com/to/fAD2UV"
                    ></iframe>
                  </div>
                )}
                {!status && (
                  <p className="hero__small">
                    Access to the Public Beta is by invitation only. Request
                    access today
                  </p>
                )}
              </div>
            )}
          />
        )}
      </div>
    );
  }

  goToTypeform = () => {
    Mixpanel.track(`B / ${this.props.mixpanelEvent}`);
  };
}
