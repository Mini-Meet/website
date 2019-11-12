import React, { Component } from 'react';
import { Mixpanel } from '../Mixpanel';
import PageLayout from './layouts/PageLayout';
import {
  Header,
  Hero,
  ProductShowcase,
  Reviews,
  Footer,
} from './blocks'


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
