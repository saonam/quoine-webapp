import React from 'react';

const Image = ({ src, className, width, height }) => (
  <svg className={className} width={width} height={height}>
    <use xlinkHref={src} />
  </svg>
);

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default Image;
