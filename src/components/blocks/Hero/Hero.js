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
  mixpanelPageEvent: string,
  url: string,
  mixpanelEvent: string,
  nextpage: boolean,
  nextpageUrl: string,
  externalPage: boolean,
  referralForm: boolean,
  mailchimpForm: boolean,
};

type FormTypes = {
  onSubscribe: Function,
};

const CustomForm = ({ onSubscribe }: FormTypes) => {
  let email;

  const submit = () => {
    if (email && email.value && email.value.indexOf('@') > -1) {
      Mixpanel.track(`MBA / Home / Subscribe`);
      Mixpanel.track(`MBA / Subscribe`);

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
                      to="/product-mba"
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
    Mixpanel.track(`${this.props.mixpanelPageEvent}/GoTo MBA`);
  };

  goToExternalLink = () => {
    Mixpanel.track(`${this.props.mixpanelPageEvent}/Apply`);
    console.log(`${this.props.mixpanelPageEvent}/Apply`);
  };

  goToNextPage = () => {
    // Mixpanel.track(`Course / ${this.props.mixpanelEvent}`);
  };
}
