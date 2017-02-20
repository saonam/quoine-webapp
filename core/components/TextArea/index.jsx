import React from 'react';

import styles from './styles.css';

const TextArea = (props) => (
  <textarea className={styles.main} {...props} />
);

export default TextArea;
