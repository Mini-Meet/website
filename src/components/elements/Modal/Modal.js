// @flow
import React, { Component } from 'react';
import './Modal.scss';

import { Card, Button } from '..';

type Props = {
  title: string,
  text: string,
  buttons: object,
  hideModal: Function,
};

export default class Modal extends Component<Props> {
  render() {
    const { title, text, buttons } = this.props;

    return (
      <div className="modalBg">
        <div className="modal">
          <Card cardModal="cardModal">
            <div className="modal__title">{title}</div>
            <div className="modal__text">{text}</div>
            <div className="modal__btnContainer">
              {buttons.map((button, buttonId) => (
                <Button
                  key={buttonId}
                  tertiary="tertiary"
                  onClick={this.onClick.bind(this, button)}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  onClick = button => {
    button.onPress && button.onPress();
    this.props.hideModal();
  };
}

// import React, { Component } from 'react'
// import propTypes from 'prop-types'
//
// import styles from './ConfirmModal.scss'
// import { Button } from '../../elements'
//
// export default class ConfirmModal extends Component {
//   render() {
//     const { title, text, buttons } = this.props
//
//     return (
//       <div className={styles.backgroundContainer}>
//         <div className={styles.container}>
// <div className={styles.title}>{title}</div>
// <div className={styles.text}>{text}</div>
//
// <div className={styles.buttonContainer}>
//   {buttons.map((button, i) => (
//     <Button
//       key={i}
//       tertiary
//       onClick={this.onButtonClick.bind(this, button)}
//     >
//       {button.label}
//     </Button>
//   ))}
// </div>
//         </div>
//       </div>
//     )
//   }
//
//   onButtonClick = (button) => {
//     button.onPress && button.onPress()
//     this.props.hideModal()
//   }
// }
//
// ConfirmModal.propTypes = {
//   title: propTypes.string,
//   text: propTypes.string,
//   buttons: propTypes.arrayOf(
//     propTypes.shape({
//       label: propTypes.string,
//       onPress: propTypes.func,
//     }),
//   ),
//   hideModal: propTypes.func,
// }
