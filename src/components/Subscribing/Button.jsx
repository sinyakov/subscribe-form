import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, disabled, children, onClick,
}) => (
  <button className="button" type={type} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  type: 'submit',
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
