import React, { Component } from 'react';
import CookieBanner from 'react-cookie-banner';
import { Link } from 'react-router-dom';

import { Mixpanel } from '../../../Mixpanel';
import {
  Footer,
  Header,
  Hero,
  ProductShowcase,
  Testimonials,
} from '../../blocks';
import './Home.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('Guide/A: Home');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <CookieBanner
          message="This website uses cookies to analyze our traffic and to personalize ads. Learn more: "
          onAccept={() => {}}
          cookie="user-has-accepted-cookies"
          dismissOnScroll={false}
          link={
            <div>
              <Link to="/legal" className="cookie-link">
                Terms & Conditions
              </Link>
            </div>
          }
        />
        <Header light />
        <div id="signup" />
        <Hero isFirstHero />
        <ProductShowcase />
        <Testimonials />
        <Hero isFirstHero={false} />
        <Footer page="HOME" />
      </div>
    );
  }
}
