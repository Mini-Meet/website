import React, {Component} from 'react';

import Footer from '../Footer/Footer.jsx'
import SignUp from '../MainPage/SignUp/SignUp.jsx'

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

