import React from 'react';
import PropTypes from 'prop-types';
import '../theme/Styles.scss';

const TextArea = (props) => {
  const { inputClassName, onChange, onKeyDown, ...more } = props;
  return (
    <textarea
      className={`text-input ${inputClassName}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...more}
    />
  );
}
 
TextArea.propTypes = {
    name: PropTypes.string, 
    placeholder: PropTypes.string, 
    inputClassName: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
};

TextArea.defaultProps = {
    name: "",
    placeholder: "",
    inputClassName: "",
    onChange: () => {},
    onKeyDown: () => {},
};

export default TextArea;