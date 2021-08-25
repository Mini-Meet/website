// @flow
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';

// import { Button } from '../../elements';

import {
  Description,
  Featured,
  Header,
  Hero,
  Image,
  MentorsAccelerator,
  Testimonial,
} from '../../blocks';

// import { ButtonNextPage } from '../../elements';

import sectionOne from '../../../assets/images/accelerator/sectionOne.png';
import sectionTwo from '../../../assets/images/accelerator/sectionTwo.png';
import sectionThree from '../../../assets/images/accelerator/sectionThree.png';

import tom from '../../../assets/images/accelerator/testimonial_tom.jpg';
import tom_big from '../../../assets/images/accelerator/testimonial_tom_big.jpg';
import tina from '../../../assets/images/accelerator/testimonial_tina.png';
import antonia from '../../../assets/images/testimonials/antonia.png';

import thumbnail from '../../../assets/images/thumbnail.jpg';

import './Accelerator.scss';

type Props = {
  //
};

// const url =
// 'https://productmastery.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=10e19965fa';
// const calendlyUrl = 'https://calendly.com/henry_latham/prod-mba';
const signUpUrl = 'https://productmastery.ac-page.com/sign-up';
const signUpCTA = 'JOIN FREE MINI MBA';
const ctaHeader = 'Take Action to Get Your Dream Role:';
const ctaSupportText =
  'Get started by unlocking 3 key secrets to the perfect interview:';

const mixpanelEvent = 'Accel Submit';
// const facebookEvent = 'Search';

// ActiveCampaign Form ID
const formId = 26;

export default class Home extends Component<Props> {
  componentDidMount() {
    window.scrollTo(0, 0);
    Mixpanel.track('Accel Page');
    // FacebookPixel.track('ViewContent');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Helmet>
          <title>
            Prod Accelerator: How to Get Your Dream Product Leadership Role
            Within 3 Months
          </title>
          <meta
            property="og:description"
            content="Fast-track your path to Head of Product with Prod MBA's hands-on, part-time product management 8-Week training programme & bootcamp, designed for Product Managers and Product Owners asking how to accelerate my product career"
          />
          <link rel="canonical" href="http://prod.mba/accelerator" />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:url" content="https://prod.mba/accelerator" />
          <meta name="twitter:image" content={thumbnail} />
          <meta name="twitter:card" content={thumbnail} />
          <meta
            name="twitter:image:alt"
            content="Prod MBA Training Programme"
          />
        </Helmet>
        <Header lightAccelerator />
        <Hero
          title="Your Dream Product Leadership Role Within 2 Months"
          subtitleOne="We fast-track Product Managers to Product Leaders by coaching you to master any interview with complete confidence & support"
          subtitleTwo={ctaSupportText}
          activeCampaignForm
          accelerator
          formId={formId}
          submitEmail={this.handleSubmitEmail}
          btnText={signUpCTA}
          url={signUpUrl}
          onClick={this.goToNextPage}
          // mailchimpForm
          // nextPageUrl="/case-study"
          // subText="By sharing your email, you agree to our "
          // subTextUrlText="Terms & Conditions"
          // subTextUrl="/legal"
          // btnText="Apply To Prod MBA"
        />
        <Featured
          header="We've worked with:"
          activeCampaignForm
          accelerator
          formId={formId}
          submitEmail={this.handleSubmitEmail}
          // buttonNext
          nextPageUrl={signUpUrl}
          btnText={signUpCTA}
          ctaSupportText={ctaSupportText}
          ctaHeader={ctaHeader}
          onClick={this.goToNextPage}
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
          mixpanelEvent={mixpanelEvent}
          // facebookEvent={facebookEvent}
        />
        <Testimonial
          name="Tina, BA to Lead PM"
          img={tina}
          quote="Ross' experience & knowledge were an invaluable resource to help me grow professionally & have a smooth transition into product - and beyond to a leadership role!"
        />
        <Description
          header="No Success? You Don't Pay."
          // Focus on confidence and soft skills
          description1="Our success depends on your success, so we are committed every step of the way."
          description2="We do charge an upfront fee, but the main cost of the programme is only paid once you've got your dream job."
          description3="That means we offer authentic, effective support & will push you top put our proven process for interview success into practice."
          image={sectionThree}
          imageAltText="How the Prod Accelerator works"
          // next page button
          nextPageUrl={signUpUrl}
          btnText={signUpCTA}
          onClick={this.goToNextPage}
          activeCampaignForm
          accelerator
          formId={formId}
          submitEmail={this.handleSubmitEmail}
          // buttonNext
          // mailchimpForm
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
        />
        <Description
          reverse
          header="Take Control of Any Interview"
          // "30% found a new role"
          description1="Most product people are TERRIBLE at pitching themselves."
          description2="Instead, we will teach you how to project confidence & leadership from the first moment of any interview."
          description3="You'll feel what it's like to control any interview - a very powerful tool to have with you for your whole career."
          image={sectionTwo}
          imageAltText="Take control of interviews"
          // next page button
          nextPageUrl={signUpUrl}
          btnText={signUpCTA}
          onClick={this.goToNextPage}
          activeCampaignForm
          accelerator
          formId={formId}
          submitEmail={this.handleSubmitEmail}
          // buttonNext
          // mailchimpForm
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
        />
        <Description
          header="2 Months, Not 5 Years"
          description1="Frustrated because you've waited years for that promotion or new role? You deserve better."
          description2="Learn our faster, far more effective way of managing your career."
          description3="From building your personal brand, to a 30% pay rise, to dominating any interview & never needing to work a dead-end job again, we'll make it happen:"
          // dollarise this!
          image={sectionOne}
          imageAltText="The Prod Accelerator Learning Experience & Bootcamp"
          // next page button
          nextPageUrl={signUpUrl}
          btnText={signUpCTA}
          onClick={this.goToNextPage}
          activeCampaignForm
          accelerator
          formId={formId}
          submitEmail={this.handleSubmitEmail}
          // buttonNext
          // mailchimpForm
          subText="By sharing your email, you agree to our "
          subTextUrlText="Terms & Conditions"
          subTextUrl="/legal"
        />
        <Testimonial
          name="Antonia, PM (New Role as Senior PM within 3 months)"
          img={antonia}
          quote="The course really made me realise what I'm looking for in my dream role, and it gaves me the tools to get there... I'd be floundering if it wasn't for the course."
        />
        <Image
          title="Some more love from our clients"
          imgDesktop={tom_big}
          imgMobile={tom}
          activeCampaignForm
          accelerator
          ctaHeader={ctaHeader}
          ctaSupportText={ctaSupportText}
          formId={formId}
          submitEmail={this.handleSubmitEmail}
        />
        <MentorsAccelerator headline="Your Coaches" />
      </div>
    );
  }

  goToNextPage = () => {
    Mixpanel.track(`${mixpanelEvent}`);
    // FacebookPixel.track(`${facebookEvent}`);
  };

  handleSubmitEmail = () => {
    Mixpanel.track(`${mixpanelEvent}`);
    // FacebookPixel.track(`${facebookEvent}`);
  };
}
