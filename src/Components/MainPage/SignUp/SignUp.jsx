import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Mixpanel } from '../../../Mixpanel';

import'./SignUp.scss'

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
      <button
        className='btn-primary'
        onClick={submit}
      >
       Request Free Early Access
      </button>
    </div>
  );
};

export default  class SignUp extends Component {

// componentWillMount() {
// }

render() {

  const firstSignup = [
   {
    title:'The Secure Journal',
    //titleTwo: 'Optimize you.',
    subtitle: 'CIA-grade security for your private thoughts'
   }
  ]

  const secondSignup = [
   {
     title: 'Ready to get started?',
     subtitle: 'Sign up for our free ebook on journaling:'
   }
  ]

  let property = this.props.isFirstSignUp ? firstSignup : secondSignup
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
