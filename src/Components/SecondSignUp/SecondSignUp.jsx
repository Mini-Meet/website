import React, { Component } from "react";
import SignUp from '../MainPage/SignUp/SignUp.jsx';

import './SecondSignUp.scss'

class SecondSignUp extends Component {
render() {
    return (
      <div>
        <div className='signupImg' />
        <SignUp
          isFirstSignUp={false}
        />
      </div>
      )
  }
 }
 export default SecondSignUp;
