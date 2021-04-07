// @flow
import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import './Loading.scss';

type Props = {
  dark?: boolean,
};

export default class Loading extends Component<Props> {
  render() {
    const { dark } = this.props;

    return (
      <div className="loading">
        <Loader
          type="Triangle" // or "Grid"
          color={dark ? '#e8b529' : '#fff'} // $secondary : $white
          height={60}
          width={60}
          timeout={30000000}
        />
      </div>
    );
  }
}
