import React from 'react';
import propTypes from 'prop-types';

import './Button.scss';

// render with <Button secondary/tertiary /> for different style classes
// btnContainer used in instances where necessary e.g. ConfirmationModal
const Button = ({
  onClick,
  children,
  secondary = false,
  tertiary = false,
  quarternary = false,
  disabled = false,
}) => {
  const buttonTypeClass = secondary
    ? 'secondary'
    : tertiary
      ? 'tertiary'
      : quarternary
        ? 'quarternary'
        : 'primary'

  return (
    <div onClick={onClick} className='container'>
      <button
        className={buttonTypeClass}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: propTypes.func,
  children: propTypes.string,
  secondary: propTypes.bool,
  tertiary: propTypes.bool,
  quarternary: propTypes.bool
};

export default Button;
