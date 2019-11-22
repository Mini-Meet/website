import React from 'react';
import Logo from '../../../assets/images/logo_dark.svg';

import './Header.scss';

function Header() {
  return <img alt="logo" src={Logo} className="logo" />;
}

export default Header;
