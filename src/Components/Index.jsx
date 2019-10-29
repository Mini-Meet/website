import React from 'react';
import MainPage from './MainPage/MainPage'
import SignUp from './MainPage/SignUp/SignUp.jsx'

import '../styles/index.scss'

function Index() {
  return (
    <div >
        <MainPage />
        <SignUp
          firstH1={'Ready to start actually sticking to your goals?'}
          span={'Sign up for our free ebook on the most effective tatics for optimising your life:'}
         />
    </div>
  );
}

export default Index;

