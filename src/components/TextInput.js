import React from 'react';
import PropTypes from 'prop-types';
import '../theme/Styles.scss';

const TextInput = (props) => {
  const { inputClassName, onChange, onKeyDown, ...more } = props;
  return (
    <input
      className={`text-input ${inputClassName}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...more}
    />
  );
}
 
TextInput.propTypes = {
    inputClassName: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
};

TextInput.defaultProps = {
    inputClassName: "",
    onChange: () => {},
    onKeyDown: () => {},
};

export default TextInput;