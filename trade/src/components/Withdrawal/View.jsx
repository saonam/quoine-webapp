import React from 'react';

import Add from 'components/WdrBank/Add';

import Standby from './Standby';

import styles from './styles.css';

const Withdrawal = ({ inputting }) => (
  <div className={styles.main}>
    <div
      // Hide `Standby` by `css` to keep Withdrawal Data
      className={inputting ? styles.none : styles.body}
    >
      <Standby />
    </div>
    {inputting ? <Add /> : null}
  </div>
);

Withdrawal.propTypes = {
  inputting: React.PropTypes.bool.isRequired,
};

export default Withdrawal;
