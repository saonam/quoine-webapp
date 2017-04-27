import PropTypes from 'prop-types';
import React from 'react';

import glyphs from './glyphs';
import styles from './styles.css';

const Icon = ({ glyph, className, width, height, block }) => (
  <svg
    className={`${block ? styles.block : ''} ${className}`}
    width={width} height={height}
  >
    <use xlinkHref={glyphs[glyph]} />
  </svg>
);

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  block: PropTypes.bool,
};

Icon.defaultProps = {
  className: '',
  width: 24,
  height: 24,
};

export default Icon;
