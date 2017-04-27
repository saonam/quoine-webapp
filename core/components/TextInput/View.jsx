import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const getBorderClass = (border) => {
  if (border === 2) { return styles.borderLarge; }
  if (border) { return styles.border; }
  return '';
};

const TextInputView = ({ type, border, ...others }) => (
  <input
    className={`${styles.main} ${getBorderClass(border)}`}
    type={type}
    {...others}
  />
);

TextInputView.defaultProps = {
  type: 'text',
};

TextInputView.propTypes = {
  type: PropTypes.string,
  border: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
};

export default TextInputView;
