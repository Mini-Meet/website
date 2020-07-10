import React, { Component } from 'react';

import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';

import { Button } from '../../elements';

import {
  Description,
  Header,
  Hero,
  Featured,
  Footer,
  Image,
  Newsletter,
  SectionSummary,
  Stats,
  Mentors,
  Testimonial,
} from '../../blocks';

import curriculum1 from '../../../assets/images/course/curriculum_1.jpg';
import curriculum1a from '../../../assets/images/course/curriculum_1a.jpg';
import curriculum2 from '../../../assets/images/course/curriculum_2.jpg';
import curriculum3 from '../../../assets/images/course/curriculum_3.jpg';

import testimonialCollage from '../../../assets/images/testimonials/collage.jpg';
import testimonialCollageSmall from '../../../assets/images/testimonials/collageSmall.jpg';

import antonia from '../../../assets/images/testimonials/antonia.png';
import richard from '../../../assets/images/testimonials/richard.png';

import './Mba.scss';

const launchDate = '3rd August 2020';

const noOfParticipants = '12';

const faqOne = (
  <div>
    <p>
      We fundamentally believe that much of what is taught in traditional MBA
      programmes (as well as in many companies for that matter) largely
      distracts from the core function of a business.
    </p>
    <br />
    <p>
      Rather than focusing on identifying the right opportunity to pursue, many
      founders & product leaders jump immediately into questions of scale, or
      how to sell the idea to an investor to raise capital.
    </p>
    <br />
    <p>
      We believe that a different model should be pursued: One which focuses on
      quickly moving to profitabiltiy, sometimes at the expense of growth. We
      are aware that the startup eco-system is focused on growth at the expense
      of everything else, but the winds are already starting to change, with
      many hyper-growth companies crumbling during this recession.
    </p>
    <br />
    <p>
      Crazy idea, right? That a business should actually need to make more money
      than it spends... Being one of the few people who can map out that path &
      move a company towards profitability is going to be extremely valuable
      over the next few years.
    </p>
    <br />
  </div>
);
const faqTwo = (
  <div>
    <p>
      You will need to be able to commit 8-10 hours per week for 6 weeks during
      the programme.
    </p>
    <p>
      We have tried to minimise the amount of content & focus only on extremely
      high-impact exercises, but the kind of work we are doing does require
      time, focus & some dedication. We have made all the weekly calls &
      workshops optional, apart from Week 1, where you will meet the other
      alumni, but the weekly cycle of consuming content & putting that into
      practice must be kept to to get real value from the programme.
    </p>
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
      What do we mean by ${"'"}good fit${"'"}, you may ask? Somebody who we
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
      Henry, our CEO & Founder, runs most of the workshops in order to make the
      learning process is as consistent as possible. We do, however, bring in
      some of our product experts for specific sessions & talks to cover certain
      topics.
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
      covering: - What the course is about - What you{"'"}ll personally get from
      it - What the company/your team will get from you participating - How you
      {"'"}ll apply the learnings to your work - How long it will take you to
      complete - The cost
    </p>
    <br />
    <p>
      If you get the green light, you can then either invoice the company or pay
      for it yourself & request reimbursement from your company
    </p>
  </div>
);

const faqItems = [
  {
    id: '1',
    title: 'How is this different from a regular MBA?',
    content: faqOne,
  },
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
];

const contentOne = (
  <div>
    <p>&nbsp;</p>
    <p>
      As we move further into 2020, one important question will be on the minds
      of founders, product leaders &amp; investors alike:
    </p>
    <br />
    <p>Profitability.</p>
    <br />
    <p>
      How can we go beyond users, not just building a product that is useful
      &amp; delightful to use, but that, ultimately, makes the company more
      money than it costs to build?
    </p>
    <br />
    <p>
      Whether you are looking for a new job, a promotion, or even thinking of
      starting a new business, learning how to build profitable, high-value
      products extremely quickly will give you a massive competitive advantage.
    </p>
    <br />
    <p>
      And you&#39;ll be left behind if you don&#39;t adapt, with ever more
      companies realising that effective product management isn&#39;t about
      getting things done quickly (tickets, story points &amp; sprints), but
      about getting the right things done:
    </p>
    <br />
    <p>
      Things that help you move your product further along its path to
      profitability.
    </p>
    <br />
    <p>
      During our programme, we want you to forget everything you know about
      product.
    </p>
    <br />
    <p>
      We want to start with the right foundations for product success, returning
      to gain a deep understanding of what a business really is - and how
      product ties into one.
    </p>
    <br />
    <p>
      We will take you from planning to action each week, supported by a group
      of other product people (PMs, designers, developers, founders), to build
      your own profitable product.
    </p>
    <br />
    <p>
      Each week in our part-time, 6-week programme will consist of 2-3 training
      videos to watch in your own time, a hands-on weekly assignment, a live
      Q&amp;A session &amp; a group workshop to put theory into practice.
    </p>
    <br />
    <img alt="Curriculum" src={curriculum1} />
    <p>
      Our learning approach is designed to be as effective as possible,
      combining theory with putting theory into practice in the real world, with
      a real product. The support of our mentorship &amp; the community is half
      of the value as well, providing motivation &amp; answering any questions
      you may have throughout &amp; beyond the programme.
    </p>
    <img alt="Curriculum" src={curriculum1a} />
    <br />
    <p>
      <b>
        Join our next intake, starting on {launchDate}. Try the 7-day mini MBA
        to see if the Prod MBA is right for you. We will notify you when
        applications open. Space is limited to {noOfParticipants} participants.
      </b>
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
      We don&#39;t teach you how to raise investment or scale your idea to
      become the next Facebook.
    </p>
    <br />
    <p>
      We only teach you the essential skills to building a product-led business.
    </p>
    <br />
    <p>
      We teach you how to build the right foundations for business success,
      meaning identifying an acute problem to solve & generating revenue from a
      lean product as quickly as possible.
    </p>
    <br />
    <p>
      Each week, we teach you high-impact theory &amp; expect our students to
      put that theory into practice, moving from a business idea to generating
      revenue within 6 weeks.
    </p>
    <br />
    <img alt="Curriculum" src={curriculum2} />
  </div>
);

const contentThree = (
  <div>
    <p>
      Unlike many of the quite frankly, over-priced &amp; low-impact courses out
      there that just teach you enough product management theory to help you
      find your first job, we only focus on what really matters:
    </p>
    <br />
    <p>Building a profitable product.</p>
    <br />
    <p>
      Therefore, you won&#39;t see any content on &quot;how to manage an
      efficient sprint&quot; or &quot;how to estimate tasks quickly&quot;.{' '}
    </p>
    <p>
      If you want to just focusing on getting better at Delivery, then checkout
      Product School or the 1,000 Scrum certificates out there on the web.
    </p>
    <br />
    <p>
      Instead, we will take you on a journey of Discovery, from defining a
      business idea, validating that that idea resonates with its target
      audience through a real customer acquisition campaign you will run, and
      then actually prototyping a real product that you will charge those
      potential customers for.{' '}
    </p>
    <br />
    <p>
      By the end of it, you will have iterated on a real business idea that has
      real customers &amp; have generated real revenue from those customers.{' '}
    </p>
    <br />
    <p>
      Whether you want to then build upon that foundation and turn it into a
      real business, or simply use it to massively stand out from the crowd when
      applying for a new product role, is up to you.
    </p>
    <br />
    <p>
      Our aim is to simply provide you with the framework to make ideas happen
      &amp; build profitable product-led businesses.
    </p>
    <br />
  </div>
);

const contentFour = (
  <div>
    <p>The programme will run from 6 weeks, starting on {launchDate}</p>
    <br />
    <p>
      On Sunday of each week, we will release the content for that week on our
      online portal, which we will invite you to during the onboarding process.
    </p>
    <br />
    <p>
      There will be 2-3 videos to watch to provide you with some theory, with a
      real-world exercise to complete by Sunday 5pm CET for the mentors &
      students to review.
    </p>
    <br />
    <p>
      During the week, there will also be an opttional Q&amp;A Session on
      Wednesday from 5-6pm CET for any questions or concerns you may have.
    </p>
    <br />
    <p>The schedule looks like this:</p>
    <br />
    <img
      alt="Curriculum"
      src={curriculum3}
      className="curriculum__main_largeImg"
    />
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
    <p>&nbsp;</p>
    <br />
    <p>
      <strong>Founders</strong>
    </p>
    <br />
    <p>
      Define &amp; execute on a clear &quot;path to profitability&quot; to
      create a sustainable future for your business without risking everything
      on unrealistic, arbitrary growth targets set by investors.
    </p>
    <br />
    <p>&nbsp;</p>
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
    <br />
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
  </div>
);

const contentSix = (
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

const contentSeven = (
  <div>
    <SectionSummary sectionHeader="FAQs" toggleItems={faqItems} />
  </div>
);

const toggleItems = [
  {
    id: '1',
    title: 'A Curriculum For The New Product World',
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
    title: 'How Many students are There?',
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

const mixpanelEvent = '0. MBA Apply';
const facebookEvent = 'SubmitApplication';

export default class Mba extends Component {
  componentDidMount() {
    Mixpanel.track('0. MBA');
    FacebookPixel.track('ViewContent');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header light />
        <Hero
          title="Build A Profitable Product in 6 Weeks With the Prod MBA"
          subtitle="Learn the fundamentals of business & strategy to deliver a real, revenue-generating product with our part-time, 6-week Prod MBA programme:"
          externalPage
          url={calendlyUrl}
          btnText="Apply To Prod MBA"
          mixpanelEvent={mixpanelEvent}
          facebookEvent={facebookEvent}
        />
        <Description
          header="This is Not Just Another Course"
          description1="This is the world's first Product Management training focused on 'path to profitability', not just 'growth' or understanding how to use Jira."
          description2="It's a 6-week part-time programme crafted by a team of experienced product leaders, run in groups of carefully selected applicants, to teach you the fundamentals of product strategy & building a profitable business in practice."
          btnText="Apply To Prod MBA"
          url={calendlyUrl}
          mixpanelEvent={mixpanelEvent}
          facebookEvent={facebookEvent}
        />
        <Testimonial
          name="Richard Illig, ex-Head of Product, now Founder at ProductPeers"
          img={richard}
          quote="60 LinkedIn conversations started, 30 website visitors, 2 newsletter subscribers and 1 SALE!"
        />
        <Stats header="Some statistics:" />
        <Featured
          header="The Prod MBA was taken by students from:"
          btnText="Apply To Join These Alumni"
          url={calendlyUrl}
          mixpanelEvent={mixpanelEvent}
          facebookEvent={facebookEvent}
        />
        <div className="curriculum">
          <h3 className="curriculum__header">Curriculum</h3>
          <div className="curriculum__main">
            <SectionSummary
              sectionHeader="Curriculum"
              toggleItems={toggleItems}
            />
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button onClick={this.goToFaqApply}>
                Apply For The Prod MBA Now
              </Button>
            </a>
          </div>
        </div>
        <Testimonial
          name="Antonia Landi, Product Owner"
          img={antonia}
          quote="Can I just say that I love this programme. I know we're only a week in, but this is the most hands-on thing I've ever done."
        />
        <Newsletter
          title="Want To Get A Feel For the Prod MBA?"
          subtitle="Subscribe and get our free 7-day Mini MBA email course, explaining the steps towards building a profitable, boostrapped product & giving you a taster of the full Prod MBA:"
          mailchimpForm
          url={url}
        />
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
}
