import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../elements';
import LogoLight from '../../../assets/images/logoWhite.svg';
import LogoDark from '../../../assets/images/logoDark.svg';

import './Header.scss';

export default class Header extends Component {
  render() {
    const { light, dark, darkWithCta, onClick } = this.props;

    return (
      <div className="header">
        {light && (
          <Link to="/home">
            <img alt="logo" src={LogoLight} className="header__logo" />
          </Link>
        )}
        {dark && (
          <Link to="/home">
            <img alt="logo" src={LogoDark} className="header__logo" />
          </Link>
        )}
        {darkWithCta && (
          <div>
            <Link to="/home">
              <img alt="logo" src={LogoDark} className="header__logo" />
            </Link>
            <div className="header__right">
              <p>Ready to fast-track your product career?</p>
              <div className="header__right_cta">
                <a
                  href="https://calendly.com/henry_latham/prod-mba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button onClick={onClick}>Book Call</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
