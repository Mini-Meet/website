import React from 'react'
import Colour from '../../../images/Colour.png'

import './Header.scss'


function  Header() {
  return (
    <img alt='logo' src={Colour} className='logo' />
  );
}

export default Header;
