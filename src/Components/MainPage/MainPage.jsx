import React, { Component } from "react";
import SignUp from './SignUp/SignUp.jsx';
import ExamplePage from './ExamplePage/ExamplePage.jsx';

class MainPage extends Component {
render() {
    return (
      <div>
        <SignUp
          mainTitle1={'Optimize your day.'}
          mainTitle2={'Optimize you.'}
          subtitle1={'Define, reflect upon & iterate your goals with our guide to self-optimization'}
        />
        <ExamplePage />
      </div>
      )
  }
 }
 export default MainPage;
