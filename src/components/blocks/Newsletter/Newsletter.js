// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Mixpanel } from '../../../Mixpanel';
import { Button, Loading } from '../../elements';
import { RefereeInput } from '..';
import './Newsletter.scss';

type Props = {
  title: string,
  subtitle: string,
  btnText: string,
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
      Mixpanel.track(`MBA / Newsletter / Subscribe!`);
      Mixpanel.track(`MBA / Subscribe`);

      onSubscribe({
        EMAIL: email.value,
      });
    }
  };

  return (
    <div className="newsletter__form">
      <input
        ref={node => {
          email = node;
        }}
        type="email"
        placeholder="Enter your email"
      />
      <Button primary onClick={submit}>
        Get Mini MBA
      </Button>
    </div>
  );
};

export default class Newsletter extends Component<Props> {
  render() {
    const {
      title,
      subtitle,
      btnText,
      nextpage,
      nextpageUrl,
      externalPage,
      referralForm,
      mixpanelEvent,
      mailchimpForm,
      url,
    } = this.props;

    return (
      <div className="newsletter">
        <div className="newsletter__header">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>

        {nextpage && (
          <div className="newsletter__nextpage">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Link to={nextpageUrl}>
                <Button onClick={this.goToNextPage}>{btnText}</Button>
              </Link>
            </a>
          </div>
        )}

        {externalPage && (
          <div className="newsletter__typeform">
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
                  <div className="newsletter__form__loading">
                    <Loading dark />
                  </div>
                )}
                {status === 'error' && (
                  <p
                    className="newsletter__form__error"
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === 'success' && (
                  <div>
                    <div className="newsletter__form__success">
                      Successfully added!
                    </div>
                  </div>
                )}
              </div>
            )}
          />
        )}
      </div>
    );
  }

  goToExternalLink = () => {
    Mixpanel.track(`Newsletter / ${this.props.mixpanelEvent}`);
  };

  goToNextPage = () => {
    Mixpanel.track(`Newsletter / ${this.props.mixpanelEvent}`);
  };
}
