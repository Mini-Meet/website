// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
// import './ButtonNextPage.scss';

type Props = {
  btnText: string,
  nextPageUrl: string,
  onClick: Function,
};

export default class ButtonNextPage extends Component<Props> {
  render() {
    const { btnText, nextPageUrl, onClick } = this.props;

    return (
      <div>
        <Link to={nextPageUrl}>
          <Button onClick={onClick}>{btnText}</Button>
        </Link>
      </div>
    );
  }
}
