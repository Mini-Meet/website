import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mixpanel } from '../../../Mixpanel';
import Logo from '../../../assets/images/logoWhite.svg';
import Book from '../../../assets/images/book.jpg';

import './Footer.scss';

class Footer extends Component {
  render() {
    const home = this.props.page === 'HOME' ? 'active' : 'inactive';
    // const about = this.props.page === 'ABOUT' ? 'active' : 'inactive';
    const courses = this.props.page === 'COURSES' ? 'active' : 'inactive';
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
            <Link to="/about" className={terms}>
              About
            </Link>
          </div>
          <div className="footer__list_item">
            <a
              className={courses}
              href="https://courses.productmastery.co/"
              onClick={this.goToCourses}
              target="_blank"
              rel="noopener noreferrer"
            >
              Courses
            </a>
          </div>
          <div className="footer__list_item">
            <a
              className={blog}
              href="https://blog.productmastery.co"
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
            <p>
              Want to learn more about building the foundations for startup
              success?
            </p>
            <a
              href="https://www.amazon.com/Why-Your-Startup-Failing-foundations-ebook/dp/B07XD444YV/ref=pd_rhf_ee_p_img_1?_encoding=UTF8&psc=1&refRID=5X596WYG1237FMSSWZ7E"
              onClick={this.goToBook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>CHECK OUT OUR BOOK</p>
            </a>
          </div>
          <Link to="/home" className="footer__logo_img">
            <img alt="logo" src={Logo} className="footer__logo_imglogo" />
          </Link>
        </div>
      </div>
    );
  }

  goToAbout = () => {
    Mixpanel.track('Slack / Page / About');
  };
  goToCourses = () => {
    Mixpanel.track('Slack / Page / PM101');
  };
  goToPricing = () => {
    Mixpanel.track('Slack / Page / Pricing');
  };
  goToBook = () => {
    Mixpanel.track('Slack / Page / Book');
  };
}

export default Footer;
