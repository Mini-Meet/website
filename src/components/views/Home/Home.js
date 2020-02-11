import React, { Component } from 'react';
import CookieBanner from 'react-cookie-banner';
import { Link } from 'react-router-dom';

import { Mixpanel } from '../../../Mixpanel';
import {
  Footer,
  Header,
  Hero,
  Featured,
  ProductShowcase,
  Testimonials,
} from '../../blocks';
import './Home.scss';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('PM.c Signup: Home');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <CookieBanner
          message="This website uses cookies: "
          onAccept={() => {}}
          cookie="user-has-accepted-cookies"
          dismissOnScroll={false}
          link={
            <div>
              <Link to="/legal" className="cookie-link">
                Read Our Terms & Conditions
              </Link>
            </div>
          }
        />
        <Header light />
        <div id="signup" />
        <Hero
          title="Master Product"
          titleTwo="Management"
          subtitle="Junior/mid-level PM? Learn how to double your salary & unlock remote work without spending $5k & months on a course with our toolkit for world-class product management"
          mixpanelEvent="Subscribed"
          mailchimpForm
          url="https://scribeapp.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04"
        />
        <Featured header="Where our Product Masters Work" />
        <ProductShowcase
          header="Your Secret Weapon For Better Product Work"
          blockOneHeader="Become a Better PM"
          blockTwoHeader="Organise Your Team Within Minutes"
          blockThreeHeader="Find Your Product Mentor"
          blockFourHeader="Learn Remote Best Practice"
          url="#signup"
          cta="Request Access >"
        />
        <Testimonials />
        <Hero
          title="Ready to transform your product career?"
          subtitle="Start seeing an impact within just a few minutes & start building the right skill set to rapidly become a world-class Product Manager:"
          mixpanelEvent="Subscribed"
          mailchimpForm
          url="https://scribeapp.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04"
        />
        <Footer page="HOME" />
      </div>
    );
  }
}
