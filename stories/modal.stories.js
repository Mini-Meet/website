import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ModalConfirm } from '../src/components/blocks'
import { Modal } from '../src/components/elements'


const modalButtons = [
  {
    id: '1',
    label: 'Cancel',
    // onPress: 'Cancel action'
  },
  {
    id: '2',
    label: 'Confirm',
    // onPress: 'Confirm action'
  },
];

storiesOf("Elements/Modal", module)

  .add("Modal: Base", () => (
    <Modal
      title="Title"
      text="Description here"
      buttons={modalButtons}
    />
  ))

  .add("Modal: Confirm", () => (
    <ModalConfirm
      confirmModalButtons={modalButtons}
      buttonAction={action(`${modalButtons.onPress} clicked`)}
    />
  ))
  ;
