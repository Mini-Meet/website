import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Colour from '../../images/logo_white.svg'

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
        {/*
        <ul className='footerLinkList'>
          <li className='footerItem'><Link to='/home' className={home}>HOME</Link></li>
          <li className='footerItem'><Link to='/about' className={about}>ABOUT</Link></li>
          <li className='footerItem'><Link to='/' className={blog}>BLOG</Link></li>
          <li className='footerItem'><Link to='/privacy' className={privacy}>PRIVACY POLICY</Link></li>
          <li className='footerItem'><Link to='/legal' className={terms}>TERMS & CONDITIONS</Link></li>
        </ul>
        */}
        <div className='logoWhiteFrame'>
          <img src={Colour} className='logoWhite' />
        </div>
      </div>
    );
  }
}

export default Footer;
