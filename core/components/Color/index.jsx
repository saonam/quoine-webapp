import React from 'react';

import styles from '@quoine/styles/color.css';

const getStyle = styleName => (
  styleName.split(' ').map(style => styles[style]).join(' ')
);

const Color = ({ styleName, children }) => (
  <span className={getStyle(styleName)}>
    {children}
  </span>
);

Color.propTypes = {
  styleName: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default Color;
