// @flow
import React, { Component } from 'react';
import LinkedInTag from 'react-linkedin-insight';

import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';

// import { Button } from '../../elements';

import {
  Description,
  Header,
  Hero,
  Featured,
  Footer,
  Image,
  MailchimpForm,
  SectionSummary,
  Stats,
  Mentors,
  Testimonial,
} from '../../blocks';

// import { ButtonNextPage } from '../../elements';

// import curriculumSixWeeks from '../../../assets/images/course/curriculum_1.jpg';
import curriculumAssignment from '../../../assets/images/course/curriculum_1a.jpg';
import curriculum3Steps from '../../../assets/images/course/curriculum_2.jpg';
import curriculumSchedule from '../../../assets/images/course/curriculum_3.jpg';
import curriculumOverview from '../../../assets/images/course/curriculum_overview.png';
import curriculumFeatureFactory from '../../../assets/images/course/curriculum_feature_factory.jpg';
import curriculumROI from '../../../assets/images/course/curriculum_roi.jpg';
import curriculumMoneyback from '../../../assets/images/course/curriculum_moneyback.png';

import testimonialCollage from '../../../assets/images/testimonials/collage.jpg';
import testimonialCollageSmall from '../../../assets/images/testimonials/collageSmall.jpg';

import antonia from '../../../assets/images/testimonials/antonia.png';
import stefanos from '../../../assets/images/testimonials/stefanos.jpeg';

import './Home.scss';

type Props = {
  //
};

const launchDate = '14th Sep 2020';
const noOfParticipants = '12';
const courseCost = '£1,397';

const faqTwo = (
  <div>
    <p>
      You will need to be able to commit 8-10 hours per week for 6 weeks during
      the programme.
    </p>
    <br />
    <p>
      We have tried to minimise the amount of content & focus only on extremely
      high-impact exercises, but the kind of work we are doing does require
      time, focus & some dedication. We have made all the weekly calls &
      workshops optional, apart from Week 1, where you will meet the other
      alumni, but the weekly cycle of consuming content & putting that into
      practice must be kept to to get real value from the programme.
    </p>
    <br />
    <p>
      Generally, each week consists of 2hrs of video content, 4hrs for the
      assignment & 2hrs of Slack interactions & workshops.
    </p>
    <br />
  </div>
);
const faqThree = (
  <div>
    <p>
      To join the Prod MBA, you must apply through the website. If after the
      30-minute interview we believe you would be a good fit, we will then offer
      you a place on the programme.
    </p>
    <br />
    <p>
      What do we mean by {"'"}good fit{"'"}, you may ask? Somebody who we
      believe has a strong motivation & the resilience to complete the
      programme, regardless of whether they are working full-time or not,
      regardless of whether they are motivated by starting their own business or
      simply getting a promotion.
    </p>
    <br />
  </div>
);
const faqFour = (
  <div>
    <p>
      Week 1 is essential. Joining the welcome call will create a strong
      foundation for the rest of the programme, providing you with motivation
      through accountability & a support network to help you improve your work.
    </p>
    <br />
    <p>
      Without a deep understanding of the concepts & frameworks we cover in Week
      1, you will struggle to get a product to market that resonates with your
      target audience. We would even go as far as to say that Week 1 is worth
      paying a few thousand euros for as its own mini-course.
    </p>
    <br />
    <p>
      On an on-going basis, it is in theory OK to miss deadlines, but experience
      suggests you will quickly fall behind. Missing one week is fine. Missing
      two and you will struggle to catch up.
    </p>
    <br />
  </div>
);
const faqFive = (
  <div>
    <p>
      The value of the other alumni is in providing feedback for your work each
      week, stress-testing or honing your ideas, as well as on-going learnings
      through webinars, workshops & in-person Meetups.
    </p>
    <br />
    <p>
      Students are able to work in small teams, for example, if 2 students find
      themselves passionate about a similar idea, but it is better in our view
      to work on your project, as the psychological aspect of this is, we
      believe, an essential part of the experience we feel will most benefit our
      students.
    </p>
    <br />
  </div>
);
const faqSix = (
  <div>
    <p>
      Henry, Founder & Lead Mentor, runs most of the workshops in order to make
      the learning process is as consistent as possible. We do, however, bring
      in some of our product experts for specific sessions & talks to cover
      certain topics.
    </p>
    <br />
    <p>
      Each student will also have, included in the price, access to 3 1x1
      sessions with any of our mentors, all 5 of whom specialise in a specific
      area, such as growth hacking, entrepreneurship or product leadership.
    </p>
  </div>
);
const faqSeven = (
  <div>
    <p>
      A lot of companies have training budgets, where they actually have money
      kept aside for their employees to take courses like this to help their
      professional development. If your company doesn{"'"}t have a budget, it
      {"'"}s worth raising the possibility with them.
    </p>
    <br />
    <p>
      If you want to discuss this with your HR team or manager, we suggest
      covering:
      <br />
      <br />
      <li>What the course is about</li>
      <li>What you{"'"}ll personally get from it</li>
      <li>What the company/your team will get from you participating</li>
      <li>How you{"'"}ll apply the learnings to your work</li>
      <li>How long it will take you to</li>
      complete
      <li>The cost</li>
    </p>
    <br />
    <p>
      If you get the green light, you can then either invoice the company or pay
      for it yourself & request reimbursement from your company
    </p>
  </div>
);

const faqEight = (
  <div>
    <p>
      There are only {noOfParticipants} places in each cohort & we are extremely
      careful in selecting only applicants we feel are a good fit for the
      programme & who we believe will be able to deliver huge results.
      <br />
      <br />
      The next cohort starts on {launchDate}.<br />
    </p>
    <br />
  </div>
);

const faqItems = [
  {
    id: '2',
    title: 'How much time will I need for the programme?',
    content: faqTwo,
  },
  {
    id: '3',
    title: 'How do we select participants?',
    content: faqThree,
  },
  {
    id: '4',
    title: 'What are the important deadlines & meetings I shouldn`t miss?',
    content: faqFour,
  },
  {
    id: '5',
    title: 'How much will I collaborate with other participants?',
    content: faqFive,
  },
  {
    id: '6',
    title: 'Who will run the sessions?',
    content: faqSix,
  },
  {
    id: '7',
    title: 'Can I get my company to pay for the programme?',
    content: faqSeven,
  },
  {
    id: '8',
    title: 'How many students are there?',
    content: faqEight,
  },
];

const contentOne = (
  <div>
    <p>
      <strong>For You</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      Products need to deliver value for the customer and for the business (i.e.
      revenue) to succeed. This is the essence of your role as a product leader.
    </p>
    <br />
    <p>
      Failure to not only deliver value for the customer, but to get them to
      love that product, is the single biggest reason startups fail.{' '}
    </p>
    <br />
    <p>
      Understanding how to make customers love your product - how to achieve
      “Product/Market Fit” - through our framework to move towards this with
      your product team, as well as focusing on profitability from an
      early-stage, will transform your career.
    </p>
    <br />
    <p>
      It will help you become a “Product Rainmaker”, leading to rapid promotion,
      autonomy in your work & the purpose that comes from building great
      products that customers love.
    </p>
    <br />
    <br />
    <p>
      <strong>For Your Company</strong>
    </p>
    <p>&nbsp;</p>
    <p>
      Furthermore, many companies invest a huge amount of money into product
      teams that do not deliver a return on investment.
    </p>
    <br />
    <p>
      In a recession economy, this situation becomes unfeasible, with these
      product teams disbanded, or drawing resources away from other parts of the
      business that may more urgently need these resources.
    </p>
    <br />
    <p>
      By learning how to deeply understand your customer, to validate product
      ideas rapidly & with limited resources, and to align your product team
      around a clear product strategy that delivers maximum value to your
      customer, you can ensure your team delivers massive value to your business
      in the form of increased growth &, more importantly, profit.
    </p>
    <br />
    <br />
    <p>
      <strong>Get Your Company To Pay</strong>
    </p>
    <br />
    <p>
      Note also that your company may cover the cost from their training
      budgets, where they actually have money kept aside for their employees to
      take courses like this to help your professional development. If your
      company doesn{"'"}t have a budget, it
      {"'"}s worth raising the possibility with them.
    </p>
    <br />
    <p>
      If you want to discuss this with your HR team or manager, we suggest
      covering:
      <br />
      <br />
      <li>
        <strong>What the course is about</strong>
      </li>
      <li>
        <strong>What you{"'"}ll personally get from it:</strong> Learning key
        skills to become an effective product leader, such as product strategy,
        product discovery, stakeholder alignment & leadership techniques
      </li>
      <li>
        <strong>
          What the company/your team will get from you participating:
        </strong>{' '}
        Ability to discover & pursue new, high-potential product opportunities
        with minimal resources, as well as your ability to pass on effective
        product management processes & advice to other team members
      </li>
      <li>
        <strong>How you{"'"}ll apply the learnings to your work:</strong> Focus
        on your product team delivering more value for the business &
        identifying new product opportunities & revenue streams
      </li>
      <li>
        <strong>How long it will take you to complete</strong>
      </li>
      <li>
        <strong>The cost</strong>
      </li>
    </p>
    <br />
    <p>
      If you get the green light, you can then either invoice the company or pay
      for it yourself & request reimbursement from your company.
    </p>
  </div>
);

const contentTwo = (
  <div>
    <p>This is not like a traditional MBA.</p>
    <br />
    <p>Nor is it anything like a traditional course.</p>
    <br />
    <p>
      We don&#39;t teach you out-dated business management techniques, or charge
      you $50k for an impressive-looking certificate from a well-known
      institution.
    </p>
    <br />
    <p>
      We don&#39;t simply upload a bunch of videos &amp; leave you to get on
      with it.
    </p>
    <br />
    <p>
      We teach you the essential skills to set the right foundations for product
      - and business - success.
    </p>
    <br />
    <img alt="Curriculum" src={curriculumSchedule} />
    <p>
      Each week, you have 1-2 hours of video content to watch, with a hands-on
      assignment to submit at the end of the week. This could be
      &quot;validating your High Experience customer&quot; or &quot;launching an
      acquisition strategy&quot;, which will be reviewed by one of our product
      mentors.
    </p>
    <br />
    <p>Example assignment:</p>
    <img alt="Curriculum" src={curriculumAssignment} />
    <br />
    <p>
      Also included is a weekly Q&A Session with Henry, our founder, as well as
      a weekly workshop, where we cover a specific topic related to the course &
      break off into smaller groups of 3-4.
    </p>
    <br />

    <img alt="Curriculum" src={curriculum3Steps} />
  </div>
);

const contentThree = (
  <div>
    <p>
      Unlike many of the, quite frankly, over-priced &amp; low-impact courses
      out there that just teach you enough product management theory to help you
      find your first job, we only focus on what really matters:
    </p>
    <br />
    <p>Building a product customers love & are willing to pay for.</p>
    <br />
    <p>
      Therefore, you won&#39;t see any content on &quot;how to manage an
      efficient sprint&quot; or &quot;how to estimate tasks quickly&quot;.{' '}
    </p>
    <p>
      If you want to just focusing on getting better at product delivery, then
      check out Product School or the 1,000 Scrum certificates out there on the
      internet.
    </p>
    <br />
    <p>
      Instead, we will take you on a journey of product discovery, from defining
      a business idea, validating that that idea resonates with its target
      audience through a real customer acquisition campaign you will run, and
      then actually prototyping a real product that you will charge those
      potential customers for.{' '}
    </p>
    <br />
    <p>
      The goal of the Prod MBA is to have you put our framework into practice,
      iterating on a real product from idea to Offer/Market Fit & onwards
      towards Product/Market Fit so that you can apply these real-world
      learnings effectively in your current role.{' '}
    </p>
    <br />
    <p>
      (We have even had a few students, such as ex-Head of Product, Richard, who
      decided to build upon their initial revenue-generating product out into a
      full-time business!)
    </p>
    <br />
  </div>
);

const contentFour = (
  <div>
    <p>The programme will run from 6 weeks, starting on {launchDate}</p>
    <br />
    <img alt="Curriculum" src={curriculumSchedule} />
    <p>
      On Sunday of each week, we will release the content for that week on our
      online portal, which we will invite you to during the onboarding process.
    </p>
    <br />
    <p>
      Each week, you have 1-2 hours of video content to watch, with a hands-on
      assignment to submit at the end of the week. This could be &quot;crafting
      your High Experience customer&quot; or &quot;launching an acquisition
      strategy&quot;, which will be reviewed by one of our product mentors.
    </p>
    <br />
    <p>Example assignment:</p>
    <img alt="Curriculum" src={curriculumAssignment} />
    <br />
    <p>
      Also included is a weekly Q&A Session with Henry, our founder, as well as
      a weekly workshop, where we cover a specific topic related to the course &
      break off into smaller groups of 3-4.
    </p>
    <br />
    <p>
      Finally, included in the price are 3x 30-minute mentorship calls with any
      one of our product mentors, as well as ongoing access to our Slack
      community & Q&A Sessions.
    </p>
    <br />
    <img alt="Curriculum" src={curriculum3Steps} />
  </div>
);

const contentFive = (
  <div>
    <p>
      The Prod MBA has been designed for ambitious product people - whether
      Product Managers, CPOs or founders - to learn critical strategic &amp;
      business skills that are integral to the success of any venture, whether
      that be of your business, or an individual product line within a business.
    </p>
    <br />
    <br />
    <p>&nbsp;</p>
    <p>
      <strong>Product Manager / Product Owner</strong>
    </p>
    <br />
    <p>
      Learn the fundamentals of business &amp; strategy to build great products
      &amp; move away from &quot;the build trap&quot; of busily getting as many
      features done as possible, rather than building the right features
      (earning yourself promotion or helping you land your dream job in the
      process).
    </p>
    <br />
    <br />
    <p>
      <strong>CPOs / Heads of Product</strong>
    </p>
    <br />
    <p>
      Learn a repeatable framework for quickly moving from opportunity to
      validated, revenue-generated product line without the risk of months of
      building an MVP &amp; an expensive product team you may not even need.
    </p>
    <br />
    <p>&nbsp;</p>
    <p>
      <strong>Founders</strong>
    </p>
    <br />
    <p>
      Define &amp; execute on a clear &quot;path to profitability&quot; &
      Product/Market Fit to create a sustainable future for your business
      without risking everything on unrealistic, arbitrary growth targets set by
      investors.
    </p>
    <br />
  </div>
);

const contentSix = (
  <div>
    <p>
      The Prod MBA costs
      <strong> {courseCost} </strong>& includes 6 weeks of weekly video content,
      a weekly assigned reviewed by our mentors, weekly Q&A sessions &
      workshops, 3x 1x1 sessions with our mentors, as well as lifetime access to
      the Prod MBA alumni network (including events & workshops).
    </p>
    <img alt="Moneyback Guarantee" src={curriculumMoneyback} />
    <p>
      <strong>Our 100% Moneyback Guarantee</strong>
    </p>
    <br />
    <p>
      If you engage with the Prod MBA &, after a few weeks, do not feel it is a
      good fit, then you can immediately get a 100% refund - no questions asked.
    </p>
    <br />
    <p>
      We’ve been delivering significant results with over 90% of our students,
      so are very confident that, if you trust the process, the Prod MBA will
      deliver results for you.
    </p>
    <br />
    <br />
    <p>
      <strong>Get Your Company To Pay</strong>
    </p>
    <br />
    <p>
      Note also that your company may cover the cost from their training
      budgets, where they actually have money kept aside for their employees to
      take courses like this to help your professional development. If your
      company doesn{"'"}t have a budget, it
      {"'"}s worth raising the possibility with them.
    </p>
    <br />
    <p>
      If you want to discuss this with your HR team or manager, we suggest
      covering:
      <br />
      <br />
      <li>
        <strong>What the course is about</strong>
      </li>
      <li>
        <strong>What you{"'"}ll personally get from it:</strong> Learning key
        skills to become an effective product leader, such as product strategy,
        product discovery, stakeholder alignment & leadership techniques
      </li>
      <li>
        <strong>
          What the company/your team will get from you participating:
        </strong>{' '}
        Ability to discover & pursue new, high-potential product opportunities
        with minimal resources, as well as your ability to pass on effective
        product management processes & advice to other team members
      </li>
      <li>
        <strong>How you{"'"}ll apply the learnings to your work:</strong> Focus
        on your product team delivering more value for the business &
        identifying new product opportunities & revenue streams
      </li>
      <li>
        <strong>How long it will take you to complete</strong>
      </li>
      <li>
        <strong>The cost</strong>
      </li>
    </p>
    <br />
    <p>
      If you get the green light, you can then either invoice the company or pay
      for it yourself & request reimbursement from your company.
    </p>
  </div>
);

const contentSeven = (
  <div>
    <SectionSummary sectionHeader="FAQs" toggleItems={faqItems} />
  </div>
);

const toggleItems = [
  {
    id: '1',
    title: 'What is the ROI for you & your company?',
    content: contentOne,
  },
  {
    id: '2',
    title: 'Unlike Any Online Course You Have Done Before',
    content: contentTwo,
  },
  {
    id: '3',
    title: 'Learn by Building a Real Product Business',
    content: contentThree,
  },
  {
    id: '4',
    title: 'The Weekly Schedule',
    content: contentFour,
  },
  {
    id: '5',
    title: 'Who is The Prod MBA for?',
    content: contentFive,
  },
  {
    id: '6',
    title: 'How Much Does it Cost?',
    content: contentSix,
  },
  {
    id: '7',
    title: 'Other FAQs',
    content: contentSeven,
  },
];

const url =
  'https://productmastery.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=10e19965fa';
const calendlyUrl = 'https://calendly.com/henry_latham/prod-mba';

const mixpanelEvent = '5. MBA Next';
const facebookEvent = 'Search';

export default class Home extends Component<Props> {
  componentDidMount() {
    Mixpanel.track('5. MBA');
    FacebookPixel.track('ViewContent');
    LinkedInTag.track('2862345'); // Page view
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="We Fast-Track POs & PMs to Head of Product"
          subtitle="Our part-time programme teaches you product strategy in practice by taking a product from idea to revenue within 6 weeks, unlocking your ability to build great products, as well as more autonomy, purpose & a big pay rise, in your current role:"
          // subtitle="Learn how to overcome the single biggest challenge to product success by going from idea to product validation with real revenue in just 6 weeks with our part-time Prod MBA training programme:"
          mailchimpForm
          nextPageUrl="/case-study"
          btnText="Get Free Case Study >"
          onClick={this.goToNextPage}
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
          url={calendlyUrl}
          // btnText="Apply To Prod MBA"
        />
        <Description
          header="Become A 'Product Rainmaker'"
          description1="Frustrated in your current role? Expensive Scrum certification or 'Agile Coach' haven't helped? Feel unable to prioritise or influence what you work on?"
          description2="Gain autonomy, purpose & rapid promotion by learning how to build products that deliver massive value for your company."
          description3="With the Prod MBA, you will learn - and practice - the skills of a true product leader, helping you to get there in 1-2 years, rather than 5-10."
          // dollarise this!
          image={curriculumROI}
          nextPageUrl="/case-study"
          btnText="Get Free Case Study >"
          onClick={this.goToNextPage}
          mailchimpForm
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
        />
        <Description
          reverse
          header="Stop The Feature Factory"
          description1="Escape the repetitive cycle of building an endless list of features that don't really make sense."
          description2="Learn how to align stakeholders & product teams around a product strategy that makes sense through prioritised, high-value feature experiments."
          description3="Unlock greater profit & growth with our framework to achieve Product/Market Fit:"
          image={curriculumFeatureFactory}
          nextPageUrl="/case-study"
          btnText="Get Free Case Study >"
          onClick={this.goToNextPage}
          mailchimpForm
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
        />
        <Description
          header="This is Not Just 'Another Course'"
          description1="The Prod MBA is an intense 6-week, part-time training programme crafted by a team of experienced product mentors, run in small groups of carefully selected applicants, to take you through the process of product strategy, discovery & validation to achieve Offer/Market Fit, in the pursuit of Product/Market Fit."
          description2="A Scrum certification or overly-theoretical Udemy course may get you your first product job, but it won't help you become a product expert."
          description3="The Prod MBA will."
          image={curriculumOverview}
          nextPageUrl="/case-study"
          btnText="Get Free Case Study >"
          onClick={this.goToNextPage}
          mailchimpForm
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
        />
        <Testimonial
          name="Antonia, Product Manager (Former PO)"
          img={antonia}
          quote="Can I just say that I love this programme. I know we're only a week in, but this is the most hands-on thing I've ever done."
        />
        <Stats header="Some statistics:" />
        <Featured
          header="The Prod MBA was taken by students from:"
          mailchimpForm
          nextPageUrl="/case-study"
          btnText="Get Free Case Study >"
          onClick={this.goToNextPage}
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
          mixpanelEvent={mixpanelEvent}
          facebookEvent={facebookEvent}
        />
        <Testimonial
          name="Stefanos, Product Owner"
          img={stefanos}
          quote="Emphasizing that our daily product work should be focused on the impact our product has on our customers, the Prod MBA taught me some really actionable frameworks for validating product ideas, improving Product/Market Fit & bringing an entirely new product to life."
        />
        <div className="curriculum">
          <h3 className="curriculum__header">FAQs</h3>
          <div className="curriculum__main">
            <SectionSummary
              sectionHeader="Curriculum"
              toggleItems={toggleItems}
            />
            <h4 className="curriculum__cta">
              Start levelling up your product career:
            </h4>
            <MailchimpForm
              url={url}
              subText="By sharing your email, you agree to our "
              subTextUrlText="Terms & Conditions"
              subTextUrl="/legal"
            />
            {
              // <ButtonNextPage
              //   nextPageUrl="/case-study"
              //   btnText="Get Free Case Study >"
              //   onClick={this.goToNextPage}
              // />
            }
          </div>
        </div>
        <Image
          title="Some more love from our students"
          imgDesktop={testimonialCollage}
          imgMobile={testimonialCollageSmall}
        />
        <Mentors />
        <Footer page="HOME" />
      </div>
    );
  }

  goToFaqApply = () => {
    Mixpanel.track(`${mixpanelEvent}`);
    FacebookPixel.track(`${facebookEvent}`);
  };

  goToNextPage = () => {
    Mixpanel.track(`${mixpanelEvent}`);
    FacebookPixel.track(`${facebookEvent}`);
  };
}
