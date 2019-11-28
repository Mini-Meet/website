import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
//import { Mixpanel } from '../../../Mixpanel';

import { Button } from '../../elements';

import './Hero.scss';

const url =
  'https://scribeapp.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="hero__form">
      {status === 'sending' && <p style={{ color: 'black' }}>sending...</p>}
      {status === 'error' && (
        <p
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <p
          style={{ color: 'green' }}
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
        title: 'Better Remote',
        titleTwo: 'Team Culture',
        subtitle: 'More effective. More Connected. More human.',
      },
    ];

    const secondHero = [
      {
        title: 'Ready to level up your team culture?',
        subtitle: 'Start building a strong, connected remote culture today:',
      },
    ];

    let property = this.props.isFirstHero ? firstHero : secondHero;
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
                onValidated={formData => subscribe(formData)}
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
