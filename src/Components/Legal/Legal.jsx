import React, {Component} from 'react';

import Footer from '../Footer/Footer.jsx'
import SignUp from '../MainPage/SignUp/SignUp.jsx'

export default class Legal extends Component {
  render () {
    return (
      <div >
          <h1>Legal</h1>
          <span>Why we are so into optmization</span>
          <span>
                Body text block Body text block Body text block
                Body text block Body text block Body text block
                Body text block Body text block Body text block
                Body text block Body text block Body text block
                Body text block Body text block Body text block
                Body text block Body text block
          </span>

          <Footer page={'TERMS & CONDITIONS'} />
      </div>
    );
  }
}


