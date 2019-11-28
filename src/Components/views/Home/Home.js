import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import {
  Header,
  Hero,
  ProductShowcase,
  Testimonials,
  Footer,
} from '../../blocks';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('Remote HR: Home');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header />
        <Hero isFirstHero />
        <ProductShowcase />
        <Testimonials />
        <Hero isFirstHero={false} />
        <Footer page="HOME" />
      </div>
    );
  }
}
