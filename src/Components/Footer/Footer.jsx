import React, { Component } from 'react'
import Colour from '../../images/ColourWhite.png'

import './Footer.scss'


class Footer extends Component {
  render() {
    let home = this.props.page === 'HOME' ? 'active' :'inactive'
    let about= this.props.page === 'ABOUT' ? 'active' :'inactive'
    let blog = this.props.page === 'BLOG' ? 'active' :'inactive'
    let privacy = this.props.page === 'PRIVACY POLICY' ? 'active' :'inactive'
    let terms = this.props.page === 'TERMS & CONDITIONS' ? 'active' :'inactive'
    return (
      <div className='footer'>
        <img src={Colour} className='logo-white' />
          <ul className='footer-link-list'>
            <li><a href='home' className={home}>HOME</a></li>
            <li><a href='about' className={about}>ABOUT</a></li>
            <li><a href='#' className={blog}>BLOG</a></li>
            <li><a href='privacy' className={privacy}>PRIVACY POLICY</a></li>
            <li><a href='legal' className={terms}>TERMS & CONDITIONS</a></li>
          </ul>
      </div>
    );
  }
}

export default Footer;
