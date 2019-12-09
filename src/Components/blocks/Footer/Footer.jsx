import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logoWhite.svg';

import './Footer.scss';

class Footer extends Component {
  render() {
    // const home = this.props.page === 'HOME' ? 'active' : 'inactive';
    // let about= this.props.page === 'ABOUT' ? 'active' :'inactive'
    // let blog = this.props.page === 'BLOG' ? 'active' :'inactive'
    // let privacy = this.props.page === 'PRIVACY POLICY' ? 'active' :'inactive'
    // const terms =
    // this.props.page === 'TERMS & CONDITIONS' ? 'active' : 'inactive';
    return (
      <div className="footer">
        {/*
          <ul className="`footer__list`">
          <li className="footer__list_item">
            <Link to="/home" className={home}>
              HOME
            </Link>
          </li>
          <li className="footer__list_item">
            <Link to="/legal" className={terms}>
              TERMS & CONDITIONS
            </Link>
          </li>

            <li className='footer__list_item'><Link to='/about' className={about}>ABOUT</Link></li>
          <li className='footer__list_item'><Link to='/' className={blog}>BLOG</Link></li>
          <li className='footer__list_item'><Link to='/privacy' className={privacy}>PRIVACY POLICY</Link></li>

        </ul>
        */}

        <div className="footer__logo">
          <img alt="logo" src={Logo} className="footer__logo_img" />
        </div>
      </div>
    );
  }
}

export default Footer;
