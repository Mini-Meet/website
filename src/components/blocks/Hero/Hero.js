// @flow
import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';
import './Hero.scss';

type Props = {
  title: string,
  titleTwo: string,
  subtitle: string,
  url: string,
  mixpanelEvent: string,
  mailchimpForm: boolean,
  typeform: boolean,
  onSubscribe: Function,
};

const CustomForm = ({ onSubscribe }) => {
  let email;
  const submit = () => {
    Mixpanel.track('PM.c Signup: Subscribed!');

    email &&
      email.value.indexOf('@') > -1 &&
      onSubscribe({
        EMAIL: email.value,
      });
  };

  return (
    <div className="hero__form">
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <Button primary onClick={submit}>
        Request Free Early Access
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
      mailchimpForm,
      typeform,
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
                    <Loader
                      type="Triangle" // or "Grid"
                      color="#fff"
                      height={60}
                      width={60}
                      timeout={3000} //3 secs
                    />
                  </div>
                )}
                {status === 'error' && (
                  <p
                    className="hero__form__error"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === 'success' && (
                  <div>
                    <div className="hero__form__loading">
                      <Loader
                        type="Triangle" // or "Grid"
                        color="#fff"
                        height={60}
                        width={60}
                        timeout={3000} //3 secs
                      />
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
    Mixpanel.track(`PM.c Signup: ${this.props.mixpanelEvent}`);
  };
}