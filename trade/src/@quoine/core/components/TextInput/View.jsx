import React from 'react';

import styles from './styles.css';

const TextInputView = ({ type, border, ...others }) => (
  <input
    className={`${styles.main} ${border ? styles.border : ''}`}
    type={type} {...others}
  />
);

TextInputView.defaultProps = {
  type: 'text',
};

TextInputView.propTypes = {
  type: React.PropTypes.string,
  border: React.PropTypes.bool,
};

export default TextInputView;
