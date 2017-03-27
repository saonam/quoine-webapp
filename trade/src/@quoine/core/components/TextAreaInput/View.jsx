import React from 'react';

import styles from './styles.css';

const TextAreaInputView = (props) => (
  <textarea className={styles.main} {...props} />
);

export default TextAreaInputView;
