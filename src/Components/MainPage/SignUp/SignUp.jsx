import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

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
    <div
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button
        className='btn-primary'
        onClick={submit}
      >
       Start Optimizing
      </button>
    </div>
  );
};

export default  class SignUp extends Component {
render() {

  const firstSignup = [
   {
    title:'Optimize your day. Optimize you.'
   },
   {
    main: 'Habitualise defining, reflecting upon & iterating your goals with our guide to journaling'
   }
  ]

  const secondSignup = [
   { title: 'Ready to start actually sticking to your goals?'

   },
   { main: 'Sign up for our free ebook on the most effective tatics for optimising your life:'

   }
  ]

  let property = this.props.isFirstSignUp ? firstSignup : secondSignup
    return (
      <div>
        { property.map((prop) => {
          return (
            <div>
              <h1>{prop.title}</h1>
              <span>{prop.main}</span>
            </div>
          )
          })
         }

        <MailchimpSubscribe
           url={url}
           render={({ subscribe, status, message }) => (
             <div className='sign-up-form'>
               <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
             </div>
           )}
         />
      </div>
      )
  }
 }

