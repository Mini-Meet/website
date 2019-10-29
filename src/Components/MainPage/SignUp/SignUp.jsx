import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import'./SignUp.scss'

const url = "https://scribeapp.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04";

const SimpleForm = () => <MailchimpSubscribe url={url}/>

class SignUp extends Component {
render() {
    return (
      <div>
        <h1>{this.props.firstH1}</h1>
        <h1>{this.props.secondH1}</h1>
        <span>{this.props.span}</span>
        <MailchimpSubscribe
           url={url}
           render={({ subscribe, status, message }) => (
             <div className='sign-up-form'>
               <SimpleForm onSubmitted={formData => subscribe(formData)} button={'Start Optmizing'}/>
             </div>
           )}
         />
      </div>
      )
  }
 }
 export default SignUp;
