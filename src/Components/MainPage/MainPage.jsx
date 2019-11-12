import React, { Component } from "react";
import SignUp from '../SignUp/SignUp.jsx';
import ExamplePage from './ExamplePage/ExamplePage.jsx';

export default class MainPage extends Component {
render() {
    return (
      <div>
        <SignUp
          isFirstSignUp={true}
        />
        <ExamplePage />
      </div>
      )
  }
 }
