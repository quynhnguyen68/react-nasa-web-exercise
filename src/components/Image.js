import React from 'react';
import '../theme/Styles.scss';

export default function (props) {
  const { src, style, ...more } = props;
  return (
    <div
      className="image"
      style={{ backgroundImage: `url(${src})`}}
      {...more}
    />
  );
}
 