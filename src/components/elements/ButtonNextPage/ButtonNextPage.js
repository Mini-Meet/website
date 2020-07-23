// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
// import './ButtonNextPage.scss';

type Props = {
  btnText: string,
  url: string,
  nextPageUrl: string,
  onClick: Function,
};

export default class ButtonNextPage extends Component<Props> {
  render() {
    const { btnText, nextPageUrl, url, onClick } = this.props;

    return (
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Link to={nextPageUrl}>
            <Button onClick={onClick}>{btnText}</Button>
          </Link>
        </a>
      </div>
    );
  }
}
