import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';
import './Hero.scss';

const url =
  'https://zetatours.us4.list-manage.com/subscribe/post?u=031f66ad668b9ad966df4a5b0&amp;id=667578ad6f';

const CustomForm = ({ status, message, onSubscribe }) => {
  let email;
  const submit = () => {
    Mixpanel.track('HR/D: Subscribed!');

    email &&
      email.value.indexOf('@') > -1 &&
      onSubscribe({
        EMAIL: email.value,
      });
  };

  return (
    <div className="hero__form">
      {status === 'sending' && (
        <p className="hero__form__sending">sending...</p>
      )}
      {status === 'error' && (
        <p
          className="hero__form__error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <p
          className="hero__form__success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
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

export default class Hero extends Component {
  render() {
    const firstHero = [
      {
        title: 'Remote Team Culture',
        titleTwo: "Doesn't Need to Suck",
        subtitle:
          'Build happier, more productive, better connected remote teams with our tools & tactics for building world-class culture',
      },
    ];

    const secondHero = [
      {
        title: 'Ready to level up your remote team culture?',
        subtitle:
          'Start building a happier, more productive, better connected remote team today:',
      },
    ];

    const property = this.props.isFirstHero ? firstHero : secondHero;

    return (
      <div className="hero">
        {property.map(prop => {
          return (
            <div key={this.props.key}>
              <div className="hero__header">
                <h1>{prop.title}</h1>
                <h1>{prop.titleTwo}</h1>
                <p>{prop.subtitle}</p>
              </div>
            </div>
          );
        })}

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <CustomForm
                status={status}
                message={message}
                onSubscribe={formData => subscribe(formData)}
              />
              <p className="hero__small">
                Access to the Public Beta is by invitation only. Request access
                today.
              </p>
            </div>
          )}
        />
      </div>
    );
  }
}
