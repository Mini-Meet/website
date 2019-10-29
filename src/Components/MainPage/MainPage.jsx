import React, { Component } from "react";
import Navbar from '../Navbar/Navbar.jsx'
import SignUp from './SignUp/SignUp.jsx';
import ExamplePage from './ExamplePage/ExamplePage.jsx';

class MainPage extends Component {
render() {
    return (
      <div>
        <Navbar />
        <SignUp />
        <ExamplePage />
      </div>
      )
  }
 }
 export default MainPage;
