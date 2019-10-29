import React from 'react'
import Colour from '../../images/Colour.png'

import './Footer.scss'


function  Footer() {
  return (
    <div className='footer'>
      <img src={Colour} className='logo' />
        <ul className='footer-link-list'>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>ABOUT</a></li>
          <li><a href='#'>BLOG</a></li>
          <li><a href='#'>PRIVACY POLICY</a></li>
          <li><a href='#'>TERMS & CONDITIONS</a></li>
        </ul>
    </div>
  );
}

export default Footer;
