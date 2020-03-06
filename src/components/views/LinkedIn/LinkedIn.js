import React, { Component } from 'react';
import CookieBanner from 'react-cookie-banner';
import { Link } from 'react-router-dom';

import { Mixpanel } from '../../../Mixpanel';
import {
  Banner,
  Footer,
  Header,
  Hero,
  Featured,
  ProductShowcase,
  Testimonials,
} from '../../blocks';
import './LinkedIn.scss';

// Product Showcase Images
import imgCourse from '../../../assets/images/prototype/product_course.png';
import imgCourse101 from '../../../assets/images/prototype/product_course101.png';
import imgTribe from '../../../assets/images/prototype/product_tribe.png';
import imgMentors from '../../../assets/images/prototype/product_mentors.png';
// import imgStrategy from '../../../assets/images/prototype/product_strategy.png';
// import imgGuide from '../../../assets/images/prototype/product_guide.png';
// import imgRemote from '../../../assets/images/prototype/product_remote.png';
// import imgOnboarding from '../../../assets/images/prototype/product_onboarding.png';
// import imgStandup from '../../../assets/images/prototype/product_standup.png';
// import imgSprints from '../../../assets/images/prototype/product_sprints.png';
// import imgRetro from '../../../assets/images/prototype/product_retro.png';
// import imgTools from '../../../assets/images/prototype/product_tools.png';

export default class LinkedIn extends Component {
  componentDidMount() {
    Mixpanel.track('A / Felix');
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
                Read Terms & Conditions
              </Link>
            </div>
          }
        />
        <Header light />
        <div id="signup" />
        <Hero
          title="Master Product"
          titleTwo="Management"
          subtitle="Junior/Mid-Level PM? Learn how to build great, innovative products that solve real problems with just a few minutes per day, without spending $5k & months on an ineffective course"
          btnText="Join Waiting List"
          mixpanelEvent="Felix / Subscribed!"
          referralForm
        />
        <Featured header="Where our Product Masters Work" />
        <ProductShowcase
          header="Your Secret Weapon For Building Great Products"
          blockOneHeader="Access The Product Mastery Course"
          blockOneBody="Learn how the world’s best Product Managers run their product teams, from vision & strategy to prioritisation & navigating stakeholder management"
          blockOneImage={imgCourse}
          blockTwoHeader="World-Class Product Mentors"
          blockTwoBody="Get advice & mentorship from our product experts. Whatever the question, whether your work for an early-stage startup or corporate, we have it covered."
          blockTwoImage={imgMentors}
          blockThreeHeader="Join A Tribe of High-Performing PMs"
          blockThreeBody="Find the right tribe for you within our network of Product Managers. Support each other's work, review projects & help each other grow professionally."
          blockThreeImage={imgTribe}
          url="#signup"
          cta="Join Waiting List >"
        />
        <Hero
          title="Ready to transform your product career?"
          subtitle="Start building the right skill set to rapidly become a world-class Product Manager:"
          btnText="Join Waiting List"
          mixpanelEvent="Felix / Subscribed!"
          referralForm
        />
        <Banner
          header="50% Off Our Intro Course This Week!"
          blockHeader="Try our Product Management 101 Course"
          blockBody="In 12 lessons, learn how to build great products with our intro to product strategy & building effective product teams. For a short time only, we're offering 50% off! Use coupon code 50%OFF at checkout"
          blockImage={imgCourse101}
          btnText="See Course Curriculum"
          onClick={this.handleBannerBtnClick}
          url="https://courses.productmastery.co/"
        />
        <Testimonials />
        <Footer page="HOME" />
      </div>
    );
  }
  handleBannerBtnClick = () => {
    Mixpanel.track('A / Felix / PM101');
  };
}
