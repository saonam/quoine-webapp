import PropTypes from 'prop-types';
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
  styleName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Color;
