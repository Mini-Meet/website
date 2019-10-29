import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import'./SignUp.scss'

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

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
               <SimpleForm onSubmitted={formData => subscribe(formData)} />
             </div>
           )}
         />
      </div>
      )
  }
 }
 export default SignUp;
