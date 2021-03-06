import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mixpanel } from '../../../Mixpanel';
import Logo from '../../../assets/images/logoWhite.svg';
import Book from '../../../assets/images/leadership_book.png';

import './Footer.scss';

class Footer extends Component {
  render() {
    const home = this.props.page === 'HOME' ? 'active' : 'inactive';
    const test = this.props.page === 'TEST' ? 'active' : 'inactive';
    // const about = this.props.page === 'ABOUT' ? 'active' : 'inactive';
    const podcast = this.props.page === 'BLOG' ? 'active' : 'inactive';
    const blog = this.props.page === 'BLOG' ? 'active' : 'inactive';
    // let privacy = this.props.page === 'PRIVACY POLICY' ? 'active' :'inactive'
    const terms =
      this.props.page === 'TERMS & CONDITIONS' ? 'active' : 'inactive';
    return (
      <div className="footer">
        <div className="`footer__list`">
          <div className="footer__list_item">
            <Link to="/home" className={home}>
              Home
            </Link>
          </div>
          <div className="footer__list_item">
            <a
              className={test}
              href="https://test.prod.mba/"
              onClick={this.goToSkillsTest}
              target="_blank"
              rel="noopener noreferrer"
            >
              How Good Are You At Product?
            </a>
          </div>
          <div className="footer__list_item">
            <Link to="/about" className={terms}>
              About
            </Link>
          </div>
          <div className="footer__list_item">
            <a
              className={podcast}
              href="https://events.prod.mba/all-podcast-episodes"
              onClick={this.goToPodcast}
              target="_blank"
              rel="noopener noreferrer"
            >
              Podcast
            </a>
          </div>
          <div className="footer__list_item">
            <a
              className={blog}
              href="https://blog.prod.mba/"
              onClick={this.goToBlog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
          <div className="footer__list_item">
            <Link to="/legal" className={terms}>
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="footer__logo">
          <div className="footer__logo_book">
            <img alt="logo" src={Book} className="footer__logo_bookimg" />
            <p>Want to learn the secrets to effective product leadership?</p>
            <a
              href="https://www.amazon.com/Product-Leadership-Starts-You-Surprising-ebook/dp/B08R8MK71C/ref=sr_1_1?dchild=1&keywords=product+leadership+starts+with+you&qid=1610011047&sr=8-1"
              onClick={this.goToBook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>BUY BOOK FOR UNDER £1</p>
            </a>
          </div>
          <Link to="/home" className="footer__logo_img">
            <img alt="logo" src={Logo} className="footer__logo_imglogo" />
          </Link>
        </div>
      </div>
    );
  }
  goToSkillsTest = () => {
    Mixpanel.track('MBA / Footer / Skills Test');
  };
  goToAbout = () => {
    Mixpanel.track('MBA / Footer / About');
  };
  goToPodcast = () => {
    Mixpanel.track('MBA / Footer / Podcast');
  };
  goToBlog = () => {
    Mixpanel.track('MBA / Footer / Blog');
  };
  goToBook = () => {
    Mixpanel.track('MBA / Footer / Book');
  };
}

export default Footer;
