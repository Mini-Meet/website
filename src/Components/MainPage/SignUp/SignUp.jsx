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

class SignUp extends Component {
render() {
    return (
      <div className='sign-up-section'>
        <div className='header-block'>
          <h1>{this.props.mainTitle1}</h1>
          <h1>{this.props.mainTitle2}</h1>
          <br />
          <h4>{this.props.subtitle1}</h4>
        </div>
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
 export default SignUp;
