// @flow
import React, { Component } from 'react';
import { SectionSummary, FAQs } from '..';

import './Curriculum.scss';

const contentOne = (
  <div>
    <p>&nbsp;</p>
    <p>
      As we move further into 2020, one important question will be on the minds
      of founders &amp; investors alike:
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
      videos to watch in your own time, a live Q&amp;A session &amp; a group
      call to review your work at the end of the week.
    </p>
    <br />
    <p>
      Our learning approach is designed to be as effective as possible,
      combining theory with putting theory into practice in the real world, with
      a real product. The support of our mentorship &amp; the community is half
      of the value as well, providing motivation &amp; answering any questions
      you may have throughout &amp; beyond the programme.
    </p>
    <br />
    <p>
      <b>
        Join our next intake, starting on May 11th 2020. Try the 7-day mini MBA
        to see if the Product MBA is right for you. We will notify you when
        applications open. Space is limited to 30 participants.
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
    <p>We teach you how to build the right foundations for business success.</p>
    <br />
    <p>
      Each week, we teach you high-impact theory &amp; expect our students to
      put that theory into practice, moving from a business idea to generating
      revenue within 6 weeks.
    </p>
    <br />
    <p>&nbsp;</p>
    <br />
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
    <br />
    <p>
      Instead, we will take you on a journey from defining a business idea,
      validating that that idea resonates with its target audience through a
      real customer acquisition campaign you will run, and then actually
      prototyping a real product that you will charge those potential customers
      for.{' '}
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
    <p>The programme will run from 6 weeks, starting on Monday 11th May.</p>
    <br />
    <p>
      On Sunday of each week, we will realise the content for that week on our
      online portal, which we will invite you to during the onboarding process.
    </p>
    <br />
    <p>
      There will be 2-3 videos to watch to provide you with some theory, with a
      real-world exercise to complete by Friday 5pm CET before our group call.
    </p>
    <br />
    <p>
      During the week, there will also be a Q&amp;A Session on Wednesday from
      5-6pm CET for any questions or concerns you may have.
    </p>
    <br />
    <p>The schedule looks like this:</p>
    <br />
    <p>&nbsp;</p>
    <br />
  </div>
);

const contentFive = (
  <div>
    <p>
      The Product MBA has been designed for experienced product people - whether
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
      <strong>Product Manager</strong>
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
    <p>&nbsp;</p>
    <br />
  </div>
);

const contentSix = (
  <div>
    <p>
      We are launching our first cohort on May 11th 2020, so are offering the
      programme for free (although we plan to charge $2,999 in future). Despite
      it being free, we are being extremely careful in which applicants we
      select for the programme, to ensure we are able to deliver huge results.
      There are only 30 places available.
    </p>
    <br />
    <p>&nbsp;</p>
    <br />
  </div>
);

const contentSeven = (
  <div>
    <FAQs />
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
    title: 'Learn by building a real business',
    content: contentThree,
  },
  {
    id: '4',
    title: 'The Weekly Schedule',
    content: contentFour,
  },
  {
    id: '5',
    title: 'Who is The Product MBA for?',
    content: contentFive,
  },
  {
    id: '6',
    title: 'Tuition Fee',
    content: contentSix,
  },
  {
    id: '7',
    title: 'FAQs',
    content: contentSeven,
  },
];

export default class Curriculum extends Component<Props> {
  render() {
    return (
      <div className="curriculum">
        <h3 className="curriculum__header">Curriculum</h3>
        <div className="curriculum__main">
          <SectionSummary toggleItems={toggleItems} />
        </div>
      </div>
    );
  }
}
