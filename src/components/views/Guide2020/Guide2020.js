import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Header, ProductShowcase, Footer } from '../../blocks';

import './Guide2020.scss';

// Images
import blockOneImage from '../../../assets/images/prototype/product_q&a.png';
import blockTwoImage from '../../../assets/images/prototype/product_strategy_session.png';

export default class Home extends Component {
  componentDidMount() {
    Mixpanel.track('LDJ / Guide2020');
  }

  render() {
    const url = 'https://calendly.com/henry_latham/30min';

    return (
      <div className="homePageWrapper">
        <Header dark />
        <ProductShowcase
          header="The Product Playbook for Navigating 2020"
          blockOneHeader="Join A Panel of Product Experts"
          blockOneBody=" We've recruited product leaders & consultants with experience working with HSBC, Lego, Google, McKinsey, Porsche + more"
          blockOneImage={blockOneImage}
          blockTwoHeader="Just 3 High-Impact Questions"
          blockTwoBody="Align your teams around a clear strategic objective & define high-impact, low-effort features, validated with real customers"
          blockTwoImage={blockTwoImage}
          cta="Book A Call To Contribute >"
          url={url}
        />
        <Footer page="HOME" />
      </div>
    );
  }
}
