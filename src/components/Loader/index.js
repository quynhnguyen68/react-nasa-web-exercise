import React from 'react';
import './styles.scss';

export default function (props) {
const { loaderClassName } = props;
  return (
    <div className={`loader ${loaderClassName}`}></div>
  );
}
 