import React from 'react';

import styles from './styles.css';

const TextBox = ({ type, ...others }) => (
  <input
    className={styles.main} type={type} {...others}
  />
);

TextBox.defaultProps = {
  type: 'text',
};

TextBox.propTypes = {
  type: React.PropTypes.string,
};

export default TextBox;
