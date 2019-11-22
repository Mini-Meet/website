import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import {
  Header,
  Hero,
  ProductShowcase,
  Testimonials,
  Image,
  Footer,
} from '../../blocks';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('Stoic: Home');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header />
        <Hero isFirstHero />
        <ProductShowcase />
        <Testimonials />
        <Image />
        <Hero isFirstHero={false} />
        <Footer page="HOME" />
      </div>
    );
  }
}
