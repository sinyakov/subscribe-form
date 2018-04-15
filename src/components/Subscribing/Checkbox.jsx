import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  text, description, checked, disabled, onChange,
}) => (
  <label htmlFor={text} className="checkbox">
    <input
      className="checkbox__field"
      type="checkbox"
      id={text}
      name={text}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
    <div className="checkbox__inner">
      <div className="checkbox__text">{text}</div>
      {description && <div className="checkbox__description">{description}</div>}
    </div>
  </label>
);

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  disabled: false,
  description: null,
};

export default Checkbox;
