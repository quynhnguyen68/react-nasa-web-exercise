import React from 'react';
import PropTypes from 'prop-types';
import '../theme/Styles.scss';

const Icon = (props) => {
  const { imgClassName, ...more } = props;
  return (
    <img
        className={`image ${imgClassName}`}
        {...more} alt="" 
    />
  );
}

Icon.propTypes = {
    imgClassName: PropTypes.string,    
    src: PropTypes.string,
};

Icon.defaultProps = {
    imgClassName: "",
    src: "",
};

export default Icon;