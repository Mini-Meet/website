// @flow
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Story.scss';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { Header, Footer, ActiveCampaignForm, Stories } from '../../blocks';

// import thumbnail from '../../../assets/images/thumbnail.jpg';
import elaine from '../../../assets/images/stories/elaine.jpg';

const ctaHeader = 'Level-up Your Product Career';
const ctaSupportText =
  'Try the free 7-day Mini MBA to learn skills to fast-track your product career:';

const mixpanelEvent = '12. Elaine Submit';
const facebookEvent = 'StartTrial'; // Search

const formId = 1;

const title = 'How Elaine Became The Kind of PM She Always Wanted to Be';

export default class StoryLuke extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    Mixpanel.track('12. elaine Page');
  }

  render() {
    return (
      <div className="storyPage">
        <Helmet>
          <title>{title}</title>
          <meta property="og:description" content={title} />
          <meta property="og:image" content={elaine} />
          <meta property="og:url" content="https://prod.mba/story/elaine" />
          <meta name="twitter:image" content={elaine} />
          <meta name="twitter:card" content={elaine} />
          <meta
            name="twitter:image:alt"
            content="Prod MBA Training Programme"
          />
        </Helmet>

        <Header darkWithCta onClick={this.handleBookCall} />
        <div className="storyPage__hero">
          <h1>{title}</h1>
        </div>
        <div className="storyPage__body">
          <img alt="Onboarding" src={elaine} className="storyPage__body_img" />
          <h3>What Next With My Career?</h3>
          <p>
            I used to really lack confidence in my role. Both in terms of how to
            have impact, but also how to take the next step in my career as a
            Product Owner.
          </p>
          <br />
          <p>
            I was just execution-focused, doing what I was told to do and felt
            completely ill-equipped for anything more strategic.
          </p>
          <br />
          <p>
            I didn’t even really understand what product strategy or being
            customer-centric really meant.
          </p>
          <br />
          <p>
            To add to my lack of confidence, I also felt overwhelmed by all the
            information out there.
          </p>
          <br />
          <p>
            All the product books I was reading told me I needed to be or do
            “this” and “that” - throwing a lot of buzz words and generic advice
            at me - and I didn’t really identify with any of it.
          </p>
          <br />
          <p>It just didn’t feel relevant to my situation.</p>
          <br />
          <h3>Constant Anxiety</h3>
          <p>
            As a result, I constantly felt anxious and uncertain about what I
            was doing day-to-day, but also with my career.
          </p>
          <br />
          <p>
            Unsure about how to take the next step - where to even start! - and
            with no idea what else was really out there, beyond just being a PO.
          </p>
          <br />
          <p>I couldn’t see a path forward and felt stuck.</p>
          <br />
          <h3>Bridging The Gap</h3>
          <p>
            The programme helped me rapidly bridge the gap from feeling lost and
            stuck, to having a very clear idea of the options I had in front of
            me.
          </p>
          <br />
          <p>
            The frameworks and principles I experienced on the programme were
            things I could make my own.
          </p>
          <br />
          <p>
            I was essentially building my own approach to product. My own
            “shape” as a Product Manager.
          </p>
          <br />
          <p>
            I loved the fact that there wasn’t an attempt to give generic advice
            and pretend to solve every problem. It was more about giving us
            flexible principles & frameworks that I could then adapt & apply in
            any role or product scenario.
          </p>
          <br />
          <p>I always say, you only learn from experience.</p>
          <br />
          <p>
            Prod MBA pushes you to experience and actually do these things -
            like speaking to customers, building a product strategy, generating
            real customer data. This cements the learning so effectively as I
            went through the programme.
          </p>
          <br />
          <p>
            I also loved the Q&A and group sessions! All the students and
            mentors are really supportive, engaged and curious about each
            other’s product!
          </p>
          <br />
          <h3>I Felt The Impact From Day 1</h3>
          <p>
            Even in Week 1 of the programme, I started to shift my mindset to
            being much more confident and product-led in my approach.
          </p>
          <br />
          <p>
            By talking to random people from my target customer group, I had to
            put myself out there from the first few days!
          </p>
          <br />
          <p>
            The content struck me with so many “aha” moments as well. Henry and
            the team just cut through all the buzzwords and generic advice to
            focus on what really matters: Not things like Scrum, but more about
            the timing of your product, or tactics to differentiate a product.
          </p>
          <br />
          <p>
            Prod MBA really just taught me that mastery doesn’t come from making
            things complicated. Instead, it’s about getting the simple things
            right.
          </p>
          <br />
          <br />
          <h3>From PO to Growth PM</h3>
          <p>I am so much more confident since joining the programme!</p>
          <br />
          <p>
            Firstly, I joined a new role as a Growth PM. I’d never even thought
            of this as an option before, but I’m loving the role!
          </p>
          <br />
          <p>
            Not only did I find the confidence to apply for something that felt
            very senior, but I’m doing strategic work that I was completely
            incapable of doing just a few months ago.
          </p>
          <br />
          <p>I’m also working on my personal brand.</p>
          <br />
          <p>
            I can envision myself being an effective product leader and continue
            on that growth path using many of the tools Prod MBA taught, as well
            as others I am now continuously picking up on my journey!
          </p>
          <br />
          <p>_</p>
          <br />
          <p className="storyPage__about">
            <a
              href="https://www.linkedin.com/in/elaineklpoon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elaine
            </a>{' '}
            was working as a PO before Prod MBA, but is now Growth PM at
            Prolific
          </p>
          <div className="storyPage__signup">
            <h4 className="curriculum__cta">{ctaHeader}</h4>
            <p className="curriculum__small">{ctaSupportText}</p>
            <ActiveCampaignForm
              formId={formId}
              submitEmail={this.handleSubmitEmail}
            />
          </div>
        </div>
        <Stories header="All Alumni Stories" />
        <Footer page="HOME" />
      </div>
    );
  }

  handleSubmitEmail = () => {
    Mixpanel.track(`${mixpanelEvent}`);
    FacebookPixel.track(`${facebookEvent}`);
  };

  handleBookCall = () => {
    Mixpanel.track('12. Luke Book Call');
  };
}
