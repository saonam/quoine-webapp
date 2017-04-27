import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ src, className, width, height }) => (
  <svg className={className} width={width} height={height}>
    <use xlinkHref={src} />
  </svg>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Image;
