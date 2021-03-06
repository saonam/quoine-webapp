import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const getStyle = styleName => (
  styleName.split(' ').map(style => styles[style]).join(' ')
);

const Button = ({ children, type, styleName, className, ...other }) => (
  <button
    type={type} className={`${getStyle(styleName)} ${className}`} {...other}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  styleName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  styleName: 'accent inline text',
  className: '',
};

export default Button;
