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
  glyph: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  block: React.PropTypes.bool,
};

Icon.defaultProps = {
  className: '',
  width: 24,
  height: 24,
};

export default Icon;
