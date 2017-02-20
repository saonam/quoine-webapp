import React from 'react';

import styles from '@quoine/styles/text.css';

const getStyle = styleName => (
  styleName.split(' ').map(style => styles[style]).join(' ')
);

const Text = ({ children, styleName, className, ...other }) => (
  <span className={`${getStyle(styleName)} ${className}`} {...other}>
    {children}
  </span>
);

Text.propTypes = {
  styleName: React.PropTypes.string,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

Text.defaultProps = {
  styleName: '',
  className: '',
};

export default Text;
