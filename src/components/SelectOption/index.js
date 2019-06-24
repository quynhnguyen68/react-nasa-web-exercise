import React from 'react';
import PropTypes from 'prop-types';
import '../../theme/Styles.scss';
import './styles.scss';

const SelectOption = (props) => {
  const { options, onChange, ...more } = props;
  return (
    <select
        className="select" 
        onChange={onChange}
        {...more}
    >
       {options && 
        options.map((item, index) => 
          <option key={index.toString()} value={item.value} className="option">
            {item.name}
          </option>)}
    </select>
  );
}

SelectOption.propTypes = {
    imgClassName: PropTypes.string,
};

SelectOption.defaultProps = {
    imgClassName: "",
};

export default SelectOption;