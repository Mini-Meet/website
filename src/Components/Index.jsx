import React, { Component } from 'react';
import { Mixpanel } from '../Mixpanel';
import PageLayout from './layouts/PageLayout';
import ProductShowcase from './ProductShowcase/ProductShowcase'
import Header from './Header/Header.jsx'
import Reviews from './Reviews/Reviews.jsx'
import Footer from './Footer/Footer.jsx'
import Hero from './Hero/Hero.jsx'


export default  class Index extends Component {

  componentDidMount() {
    Mixpanel.track('Stoic: Home')
  }

  render() {
    return (
      <PageLayout >
        <Header />
        <Hero isFirstHero={true} />
        <ProductShowcase />
        <Reviews />
        <Hero isFirstHero={false} />
        <Footer page={'HOME'} />
      </PageLayout>
    );
  }
}
