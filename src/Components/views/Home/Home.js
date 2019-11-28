import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { Header, Hero, ProductShowcase, Footer } from '../../blocks';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('HR/A: Home');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header />
        <Hero isFirstHero />
        <ProductShowcase />
        <Hero isFirstHero={false} />
        <Footer page="HOME" />
      </div>
    );
  }
}
