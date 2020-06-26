// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Mixpanel } from '../../../Mixpanel';
import { Button, Loading } from '../../elements';
import { RefereeInput } from '..';
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
  nextpage: boolean,
  nextpageUrl: string,
  externalPage: boolean,
  referralForm: boolean,
  mailchimpForm: boolean,
  mixpanelEvent: string,
};

type FormTypes = {
  onSubscribe: Function,
};

const CustomForm = ({ onSubscribe }: FormTypes) => {
  let email;

  const submit = () => {
    if (email && email.value && email.value.indexOf('@') > -1) {
      Mixpanel.track(`0. Home MiniMBA Subscribe`);
      Mixpanel.track(`0. MiniMBA Subscribe`);

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
      <Button primary onClick={submit}>
        Join Mini MBA
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
      btnText,
      subText,
      subTextUrl,
      subTextUrlText,
      nextpage,
      nextpageUrl,
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

        {nextpage && (
          <div className="hero__nextpage">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Link to={nextpageUrl}>
                <Button onClick={this.goToNextPage}>{btnText}</Button>
              </Link>
            </a>
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
                    <div className="hero__form__success">
                      Successfully added!
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
                  <p className="hero__subtext">
                    {subText}
                    <Link
                      to={subTextUrl}
                      className="hero__subtext_link"
                      onClick={this.goToSubTextLink}
                    >
                      {subTextUrlText}
                    </Link>
                  </p>
                )}
              </div>
            )}
          />
        )}
      </div>
    );
  }

  goToSubTextLink = () => {
    Mixpanel.track('0. / Home Subtext Link');
  };

  goToExternalLink = () => {
    Mixpanel.track(`${this.props.mixpanelEvent}`);
  };

  goToNextPage = () => {
    Mixpanel.track(`${this.props.mixpanelEvent}`);
  };
}
