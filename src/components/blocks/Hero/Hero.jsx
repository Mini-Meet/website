import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';

import './Hero.scss';

const url =
  'https://scribeapp.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04';

const CustomForm = ({ status, message, onSubscribe }) => {
  let email;
  const submit = () => {
    Mixpanel.track('PM Signup: Subscribed!');

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
        title: 'Master Product',
        titleTwo: 'Management',
        subtitle:
          'Junior/mid-level PM? Learn how to double your salary & unlock remote work without spending $5k & months on a course with our toolkit for world-class product management',
      },
    ];

    const secondHero = [
      {
        title: 'Ready to transform your product career?',
        subtitle:
          'Start seeing an impact in just 5 minutes today & gradually build the right skill set to rapidly become a world-class Product Manager:',
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
