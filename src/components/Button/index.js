import React from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import './styles.scss';

const Button =  (props) => {
const { onClick, btnClassName, iconClassName, children, imageUrl, ...more } = props;
  return (
    <button 
        className={`button ${btnClassName}`}
        onClick={throttle(onClick, 350)} 
        {...more}
    >
        {imageUrl && <img src={imageUrl} className={iconClassName} alt="" />}
        {children}
    </button>
  );
}

Button.propTypes = {
    btnClassName: PropTypes.string,
    imageUrl: PropTypes.string,
    onClick: PropTypes.func,
    iconClassName: PropTypes.string, 
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

Button.defaultProps = {
    btnClassName: "",
    imageUrl: "",
    onClick: () => {},
    iconClassName: "", 
    disabled: false,
};

export default Button;