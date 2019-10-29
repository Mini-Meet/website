import React from 'react';
import MainPage from './MainPage/MainPage'
import Navbar from './Navbar/Navbar.jsx'
import Footer from './Footer/Footer.jsx'
import SignUp from './MainPage/SignUp/SignUp.jsx'

import '../styles/index.scss'

function Index() {
  return (
    <div >
       <Navbar />
        <MainPage />
        <SignUp
          firstH1={'Ready to start actually sticking to your goals?'}
          span={'Sign up for our free ebook on the most effective tatics for optimising your life:'}
         />
        <Footer />
    </div>
  );
}

export default Index;

