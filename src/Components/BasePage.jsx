import React, { Component } from 'react';
import { Mixpanel } from '../Mixpanel';
import PageLayout from './layouts/PageLayout';
import {
  Header,
  Hero,
  Featured,
  AppPrototype,
  Testimonials,
  Image,
  Footer,
} from './blocks';

export default class BasePage extends Component {
  componentDidMount() {
    Mixpanel.track('Stoic: Home');
  }

  render() {
    return (
      <PageLayout>
        <Header />
        <Hero isFirstHero={true} />
        <Featured />
        <AppPrototype />
        <Testimonials />
        <Image />
        <Hero isFirstHero={false} />
        <Footer page={'HOME'} />
      </PageLayout>
    );
  }
}
