import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Popup = (props) => {
  const { isVisible, children, popupClassName, ...more } = props;
  return (
    <div
      className={isVisible ? `popup ${popupClassName}`: "invisible"}
      {...more}
    >
        {children}
    </div>
  );
}
 
Popup.propTypes = {
    isVisible: PropTypes.bool,
};
Popup.defaultProps = {
    isVisible: false,
};

export default Popup;