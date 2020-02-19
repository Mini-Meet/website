// @flow
import React, { Component } from 'react';
import { toInteger } from 'lodash';
import { Player } from 'video-react';
import { Mixpanel } from '../../../Mixpanel';
import { Icon } from '..';

import './Video.scss';

type Props = {
  videoId: string,
  id: string,
  header: string,
};

type State = {
  videoClosed: boolean,
};

export default class Video extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      videoTimerSet: false,
      videoClosed: false,
    };
  }

  componentDidMount() {
    // this.refs.player.subscribeToStateChange(this.handleVideoState.bind(this));
    this.handleVideoState = this.handleVideoState.bind(this);
  }

  render() {
    const { videoId, header, id } = this.props;

    const { videoClosed } = this.state;

    return (
      <div>
        {!videoClosed && (
          <div className="video" id={id}>
            <div className="video__header">
              <div className="video__header_caption">{header}</div>
              <Icon
                icon="close"
                onClick={this.handleVideoClose.bind(this)}
                classOverride="video__header_icon"
              />
            </div>
            {
              // <Player
              //   ref="player"
              //   playsInline
              //   // poster="/assets/poster.png"
              //   src={videoId}
              // />
            }
            <Player>
              <source src={videoId} />
            </Player>
          </div>
        )}
      </div>
    );
  }

  handleVideoClose = () => {
    const { videoClosed } = this.state;
    const { id } = this.props;

    Mixpanel.track(`${id} / Video / ${videoClosed}`);

    this.setState({
      videoClosed: true,
    });
  };

  handleVideoState = state => {
    const { videoTimerSet } = this.state;
    const { id } = this.props;

    if (toInteger(state.currentTime) === 30 && !videoTimerSet) {
      this.setState({ videoTimerSet: true });
      Mixpanel.track(`${id} / Video / ${toInteger(state.currentTime)}`);
    }
  };
}
