import React from 'react';

import styles from './styles.css';

const Progress = ({ value }) => (
  <div className={styles.main} >
    <div className={styles.all}>
      <div className={styles.filled} style={{ width: `${value * 100}%` }} />
    </div>
  </div>
);

Progress.propTypes = {
  value: React.PropTypes.number.isRequired,
};

export default Progress;
