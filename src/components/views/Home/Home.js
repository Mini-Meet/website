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

// Product Showcase Images
import imgStrategy from '../../../assets/images/prototype/product_strategy.png';
import imgGuide from '../../../assets/images/prototype/product_guide.png';
import imgRemote from '../../../assets/images/prototype/product_remote.png';
import imgMentors from '../../../assets/images/prototype/product_mentors.png';
// import imgOnboarding from '../../../assets/images/prototype/product_onboarding.png';
// import imgStandup from '../../../assets/images/prototype/product_standup.png';
// import imgSprints from '../../../assets/images/prototype/product_sprints.png';
// import imgRetro from '../../../assets/images/prototype/product_retro.png';
// import imgTools from '../../../assets/images/prototype/product_tools.png';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('D Signup: Home');
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
          subtitle="Junior/Mid-Level PM? Learn how to build great products that solve real problems without spending $5k & months on an ineffective course"
          mixpanelEvent="Subscribed"
          mailchimpForm
          url="https://scribeapp.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04"
        />
        <Featured header="Where our Product Masters Work" />
        <ProductShowcase
          header="Your Secret Weapon For Building Great Products"
          subheader="A Product Management toolkit for learning & applying product best practice"
          blockOneHeader="Learn Best Practice"
          blockOneBody="Learn how the world’s best Product Managers run their product teams, from vision & strategy to prioritisation & navigating stakeholder management"
          blockOneImage={imgStrategy}
          blockTwoHeader="Apply With Your Team"
          blockTwoBody="Use our customisable product templates to set your strategy, a high-level roadmap & to organise your team within minutes"
          blockTwoImage={imgGuide}
          blockThreeHeader="Iterate Towards Mastery"
          blockThreeBody="Join our network of PMs & Product Mentors to share ideas, get feedback on your approach & for experienced mentorship throughout your product career"
          blockThreeImage={imgMentors}
          blockFourHeader="Bonus: Unlock Remote  Work"
          blockFourBody="Apply remote best practices, taken from the world’s best remote companies, to start moving your team towards being fully remote"
          blockFourImage={imgRemote}
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
