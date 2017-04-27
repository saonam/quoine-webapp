import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const ColorFlashingView = ({ flash, children, block }) => {
  const className = `${
    block ? styles.block : styles.default
  } ${
    styles[flash]
  }`;
  return (
    <div className={className}>{children}</div>
  );
};

ColorFlashingView.propTypes = {
  flash: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
};

export default ColorFlashingView;
