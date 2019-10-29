import React, { Component } from "react";
import Navbar from '../Navbar/Navbar.jsx'
import SignUp from './SignUp/SignUp.jsx';
import ExamplePage from './ExamplePage/ExamplePage.jsx';

class MainPage extends Component {
render() {
    return (
      <div>
        <Navbar />
        <SignUp
          firstH1={'Optimize your day.'}
          secondH1={'Optimize you.'}
          span={'Habitualise defining, reflecting upon & iterating your goals with our guide to journaling'}
        />
        <ExamplePage />
      </div>
      )
  }
 }
 export default MainPage;
