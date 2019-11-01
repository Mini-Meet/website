import React, { Component } from "react";
import SignUp from '../MainPage/SignUp/SignUp.jsx';

import './SecondSignUp.scss'

import img from '../../images/app-screens.png';

class SecondSignUp extends Component {
render() {
    return (
      <div>
        <img alt='Join now' src={img} className='signup-img' />
        <SignUp
          isFirstSignUp={false}
        />
      </div>
      )
  }
 }
 export default SecondSignUp;
