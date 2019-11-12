import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
//import { Mixpanel } from '../../../Mixpanel';

import { Button } from '../../elements'

import './Hero.scss'

const url = "https://scribeapp.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className='sign-up-form'
    >
      {status === "sending" && <p style={{ color: "black" }}>sending...</p>}
      {status === "error" && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <p
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <Button
        primary
        onClick={submit}
      >
       Request Free Early Access
      </Button>
    </div>
  );
};

export default  class Hero extends Component {
render() {

  const firstHero = [
   {
    title:'Optimize your day.',
    titleTwo: 'Optimize you.',
    subtitle: 'Define, reflect upon & iterate your goals with our tools & tactics for self-optimization'
   }
  ]

  const secondHero = [
   {
     title: 'Ready to start sticking to your goals?',
     subtitle: 'Sign up for our free ebook on the most effective tactics for optimizing your life:'
   }
  ]

  let property = this.props.isFirstHero ? firstHero : secondHero
    return (
      <div className='sign-up-section'>
        { property.map((prop) => {
          return (
            <div>
              <div className='header-block'>
                <h1>{prop.title}</h1>
                <h1>{prop.titleTwo}</h1>
                <p>{prop.subtitle}</p>
              </div>
            </div>
          )
          })
         }

        <MailchimpSubscribe
           url={url}
           render={({ subscribe, status, message }) => (
             <div>
               <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
                <p className='small'>
                  Access to the Public Beta is by invitation only. Request access today.
                </p>
             </div>
           )}
         />
      </div>
      )
  }
 }
