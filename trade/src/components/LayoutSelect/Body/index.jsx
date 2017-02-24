import React from 'react';

import Button from '../Button';

import styles from './styles.css';

const layouts = ['alpha', 'beta', 'gamma'];

const LayoutSelectBody = () => (
  <div className={styles.main}>
    {layouts.map(name => (
      <div className={styles.button} key={name}>
        <Button name={name} />
      </div>
    ))}
  </div>
);

export default LayoutSelectBody;
