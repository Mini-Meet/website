// @flow
import React, { Component } from 'react';

import { Modal, Icon } from '../../elements';

import './ModalConfirm.scss';

export default class ModalConfirm extends Component<Props> {
  constructor(props) {
    super(props);

    // const deleteButton = {
    //   label: 'Delete',
    // onPress: store selection
    // }

    const cancelButton = {
      label: 'Cancel',
      // onPress: store selection
    };

    const confirmButton = {
      label: 'Confirm',
      // onPress: store selection
    };

    this.state = {
      showModal: false,
      confirmModalButtons: [cancelButton, confirmButton],
    };
  }

  componentWillMount() {
    // save modal preferences (if necessary)
  }

  render() {
    const { showModal, confirmModalButtons } = this.state;

    return (
      <div className="modalConfirm">
        <Icon icon="delete" onClick={this.onHideModal.bind(this)} />

        {showModal && (
          <Modal
            title="Here is an important modal title"
            text="Here is an important modal description. Here is an important modal description."
            buttons={confirmModalButtons}
            hideModal={this.onHideModal.bind(this)}
          />
        )}
      </div>
    );
  }

  onHideModal = () => {
    const { showModal } = this.state;

    this.setState({ showModal: !showModal });
  };
}
