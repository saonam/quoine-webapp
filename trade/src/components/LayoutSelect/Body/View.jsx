import React from 'react';

import Button from '../Button';

import styles from './styles.css';

const LayoutSelectBody = ({ all }) => (
  <div className={styles.main}>
    {all.map(name => (
      <div className={styles.button} key={name}>
        <Button name={name} />
      </div>
    ))}
  </div>
);

LayoutSelectBody.propTypes = {
  all: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default LayoutSelectBody;
