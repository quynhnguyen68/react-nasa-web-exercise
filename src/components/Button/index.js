import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button =  (props) => {
const { onClick, btnClassName, children, imageUrl, ...more } = props;
  return (
    <button 
        className={`button ${btnClassName}`}
        onClick={onClick} 
        {...more}
    >
        {imageUrl && <img src={imageUrl} alt="" />}
        {children}
    </button>
  );
}

Button.propTypes = {
    btnClassName: PropTypes.string,
    imageUrl: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    btnClassName: "",
    imageUrl: "",
    onClick: () => {},
};

export default Button;