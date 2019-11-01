import React from 'react';
import MainPage from './MainPage/MainPage'
import Navbar from './Navbar/Navbar.jsx'
import Reviews from './Reviews/Reviews.jsx'
import Footer from './Footer/Footer.jsx'
import SecondSignUp from './SecondSignUp/SecondSignUp.jsx'

import '../styles/index.scss'

function Index() {
  return (
    <div >
       <Navbar />
        <MainPage />
        <Reviews />
        <SecondSignUp
         />
        <Footer />
    </div>
  );
}

export default Index;
