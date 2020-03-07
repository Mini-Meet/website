import React, { Component } from 'react';
import CookieBanner from 'react-cookie-banner';
import { Link } from 'react-router-dom';

import { Mixpanel } from '../../../Mixpanel';
import {
  Banner,
  Footer,
  Header,
  Hero,
  FAQs,
  Featured,
  ProductShowcase,
  Testimonials,
} from '../../blocks';
import './Home.scss';

// Product Showcase Images
import imgCourse from '../../../assets/images/prototype/product_course.png';
import imgCourse101 from '../../../assets/images/prototype/product_course101.png';
import imgTribe from '../../../assets/images/prototype/product_tribe.png';
import imgMentors from '../../../assets/images/prototype/product_mentors.png';

// FAQs Content
const faqProgramme = (
  <div>
    <p>
      The Product Mastery Programme does not just provide product management
      theory.
      <br />
      <br />
      We believe that the most effective approach to learning is to put theory
      into practice.
      <br />
      <br />
      Therefore, each student will be put into a cohort with other Product
      Managers. Each week, students will be expected to commit 1-2 hours to
      complete a specific section of the Product Mastery training, a group
      exercise & to attend the class Office Hour with one of our experienced
      mentors.
      <br />
      <br />
      We currently request you join the waiting list, as we prepare for a public
      launch in the coming weeks.
      <br />
      <br />
      If you are accepted onto the Programme, the Programme will last 11 weeks,
      covering the core elements of effective Product Management:
      <ol>
        <li>Understanding the Business</li>
        <li>Identifying Opportunities</li>
        <li>Validating an Opportunity</li>
        <li>Building an Adaptable Foundation</li>
        <li>Validating Our Solution</li>
        <li>Building Our Solution</li>
        <li>Meaure & Learn</li>
        <li>Demo Your Product</li>
        <li>Leadership 101</li>
        <li>10 Lessons To Navigate Reality</li>
        <li>Feedback</li>
      </ol>
      Once the training is completed, however, you will be able to enjoy access
      to our community of alumni & Product Mentors, who will run regular open
      office hours, FAQ sessions, as well as online workshops.
      <br />
      <br />
      <b>
        Our goal is to ensure you have continued support & feeback when it comes
        to actually putting the theory of Product Management into practice.
      </b>
      <br />
      <br />
    </p>
  </div>
);

const cost = (
  <div>
    <p>
      <b>
        The total cost is €999, for the 11-Week Training, weekly mentorship
        sessions & for indefinite access to the community for on-going training.
      </b>
      <br />
      <br />
      Most companies have a very generous budget for professional development
      that most employees are either unaware of or simply do not use.
      <br />
      <br />
      Therefore you should be able to convince your company to cover the costs.
      If you feel unconfident doing this, then this is how you can frame the
      conversation with your HR team. Cover:
      <br />
      <br />
      A lot of companies have training budgets, where they actually have money
      kept aside for their employees to take courses like this to aid their
      professional development. If this is the case for you, then great! If your
      company doesn’t explicitly say they offer it, it’s sometimes worth having
      a discussion with them to see if it’s a possibility.
      <br />
      <br />
      From our experience what normally happens here is that you’d have
      discussion with your HR department or manager,
      <ul>
        <li>What the programme is about</li>
        <li>What you’ll personally get from it</li>
        <li>What the company/your team will get from you being part of it</li>
        <li>How you’ll apply the learnings to your everyday work</li>
        <li>What the cost of the course is</li>
        <li>How long it will take you to complete it</li>
        <li>
          An actionable ‘next step’ from the course (i.e. running experiments to
          deliver a better ROI for your business)
        </li>
      </ul>
      If they agree, you can usually pay yourself and forward the receipt to HR,
      or simply ask them to pay for it yourself.
      <br />
      <br />
      If they don’t agree, it’s worth considering that this is an investment &
      will pay itself back in professional development, promotion, potential new
      clients, etc.
      <br />
      <br />
      If you’re still not sure, I would also suggest dipping your toe in to see
      how much value this programme can add to your career by completing our
      Product Management 101 Course.
      <br />
      <br />
      Also, remember that if you{"'"}re not happy with your purchase, contact us
      within 30 days & we will immediately refund your order.
      <br />
      <br />
    </p>
  </div>
);

const benefits = (
  <div>
    <p>
      Most Product Managers are, in fact, Project Managers, responsible only for
      getting features built as quickly as possible, rather than determining
      what a team should build next - & why.
      <br />
      <br />
      Without understanding how to define product strategy, how to define
      specific product initiatives & lacking a framework to actually experiment
      towards acheiving a specific goal, you will never get out of this project
      management trap.
      <br />
      <br />
      Considering 50-70% of our product ideas will fail, understanding how to
      implement an effective product process becomes a MASSIVE competitive
      advantage for a Product Manager.
      <br />
      <br />
      Even if you only have one or two years experience in product management,
      if you can become the person in your company that understands product
      strategy, how to build effective product teams & to apply a data-driven
      process to discovering & building the right features, you will
      dramatically accelerate your career.
      <br />
      <br />
      <b>
        We strongly believe you can easily double your salary, achieve multiple
        promotions and/or land your dream job by learning how to apply these
        concepts in the real world, as we have seen the benefits ourselves.
      </b>
    </p>
  </div>
);

const toggleItems = [
  {
    id: '1',
    title: 'How Does The Programme Work?',
    content: faqProgramme,
  },
  {
    id: '2',
    title: 'What Does It Cost?',
    content: cost,
  },
  {
    id: '3',
    title: 'What Are The Benefits of the Programme?',
    content: benefits,
  },
];

export default class LinkedIn extends Component {
  componentDidMount() {
    Mixpanel.track('C / Home');
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
          mixpanelEvent="Home / Subscribed!"
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
        <Banner
          header="50% Off Our Intro Course This Week!"
          blockHeader="Try our Product Management 101 Course"
          blockBody="In 12 lessons, learn how to build great products with our intro to product strategy & building effective product teams. For a short time only, we're offering 50% off! Use coupon code 50%OFF at checkout"
          blockImage={imgCourse101}
          btnText="See Course Curriculum"
          onClick={this.handleBannerBtnClick}
          url="https://courses.productmastery.co/"
        />
        <FAQs
          sectionHeader="FAQs"
          // sectionSubheader="This is a description of this page and why it is relevant"
          toggleItems={toggleItems}
        />
        <Hero
          title="Ready to transform your product career?"
          subtitle="Start building the right skill set to rapidly become a world-class Product Manager:"
          btnText="Join Waiting List"
          mixpanelEvent="Home / Subscribed!"
          referralForm
        />
        <Testimonials />
        <Footer page="HOME" />
      </div>
    );
  }
  handleBannerBtnClick = () => {
    Mixpanel.track('C / Page / PM101');
  };
}
