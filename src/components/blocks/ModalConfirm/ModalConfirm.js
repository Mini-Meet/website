// @flow
import React, { Component } from 'react';

import { Modal, Icon } from '../../elements';

import './ModalConfirm.scss';

type Props = {
  confirmModalButtons: Object, // TODO - add real props
  buttonAction: Function,
};

type State = {
  showModal: boolean,
};

export default class ModalConfirm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  componentWillMount() {
    // save modal preferences (if necessary)
  }

  render() {
    const { showModal } = this.state;
    const { confirmModalButtons } = this.props;

    return (
      <div className="modalConfirm">
        <Icon icon="delete" onClick={this.onShowModal.bind(this)} />

        {showModal && (
          <Modal
            title="Here is an important modal title"
            text="Here is an important modal description. Here is an important modal description."
            buttons={confirmModalButtons}
            hideModal={this.onModalButtonClick.bind(this)}
          />
        )}
      </div>
    );
  }

  onShowModal = () => {
    const { showModal } = this.state;

    this.setState({ showModal: !showModal });
  };

  onModalButtonClick = () => {
    const { showModal } = this.state;

    this.props.buttonAction();

    this.setState({ showModal: !showModal });
  };
}
