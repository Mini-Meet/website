import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";

import { ModalConfirm } from '../src/components/blocks'
import { Modal } from '../src/components/elements'

storiesOf("Elements/Modal", module)

  .add("Modal: Base", () => (
    <Modal
    />
  ))

  .add("Modal: Confirm", () => (
    <ModalConfirm
    />
  ))
  ;
