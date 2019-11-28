import React from 'react';
import Logo from '../../../assets/images/logoWhite.svg';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <img alt="logo" src={Logo} className="header__logo" />
    </div>
  );
}

export default Header;
