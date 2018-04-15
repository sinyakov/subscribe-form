import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Radio = ({
  id, children, onChange, checked, disabled,
}) => (
  <label
    htmlFor={id}
    className={cn('radio', checked && 'radio--checked', disabled && 'radio--disabled')}
  >
    <input
      className="radio__input"
      type="radio"
      id={id}
      name={id}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
    {children}
  </label>
);

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
};

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
