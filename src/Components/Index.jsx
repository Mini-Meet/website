import React, { Component } from 'react';
import MainPage from './MainPage/MainPage'
import Navbar from './Navbar/Navbar.jsx'
import Reviews from './Reviews/Reviews.jsx'
import Footer from './Footer/Footer.jsx'
import SignUp from './MainPage/SignUp/SignUp.jsx'

import '../styles/index.scss'

export default  class Index extends Component {
  render() {
    return (
      <div >
         <Navbar />
          <MainPage />
          <Reviews />
          <SignUp
            isFirstSignUp={false}
           />
          <Footer page={'HOME'} />
      </div>
    );
  }
}

