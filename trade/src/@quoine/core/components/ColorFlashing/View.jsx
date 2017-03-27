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
  flash: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  block: React.PropTypes.bool,
};

export default ColorFlashingView;
