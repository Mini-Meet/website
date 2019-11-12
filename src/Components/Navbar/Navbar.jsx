import React from 'react'
import Colour from '../../images/logo_dark.svg'

import './Navbar.scss'


function  Navbar() {
  return (
    <div className='nav'>
      <img src={Colour} className='logo' />
    </div>
  );
}

export default Navbar;
