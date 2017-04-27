import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const getStyle = styleName => (
  styleName.split(' ').map(style => styles[style]).join(' ')
);

const Header = ({ children, styleName, className, ...other }) => (
  <header
    className={`${styles.base} ${getStyle(styleName)} ${className}`}
    {...other}
  >
    {children}
  </header>
);

Header.propTypes = {
  styleName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  styleName: '',
  className: '',
};

export default Header;
