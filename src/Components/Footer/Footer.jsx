import React from 'react'
import Colour from '../../images/Colour.png'

import './Footer.scss'


function  Footer() {
  return (
    <div>
      <img src={Colour} className='logo' />
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>BLOG</li>
          <li>PRIVACY POLICY</li>
          <li>TERMS & CONDITIONS</li>
        </ul>
    </div>
  );
}

export default Footer;
