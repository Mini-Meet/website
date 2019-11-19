import React, {Component} from 'react';

import Footer from '../../blocks/Footer/Footer.jsx'
//import Hero from '../Hero/Hero.jsx'

export default class About extends Component {
  render () {
    return (
      <div >
          <h1>About</h1>
          <span>Why we are so into optmization</span>
          <span>
            Body text block Body text block Body text block
            Body text block Body text block Body text block
            Body text block Body text block Body text block
            Body text block Body text block Body text block
            Body text block Body text block Body text block
            Body text block Body text block
          </span>

          <Footer page={'ABOUT'} />
      </div>
    );
  }
}
