import React from 'react';

import Add from 'components/WdrBank/Add';

import Body from './Body';

import styles from './styles.css';

// Hide `Body` by `css` to keep Withdrawal Data
const Withdrawal = ({ inputting }) => (
  <div className={styles.main}>
    <div className={inputting ? styles.none : ''}>
      <Body />
    </div>
    {inputting ? (<Add />) : null}
  </div>
);

Withdrawal.propTypes = {
  inputting: React.PropTypes.bool.isRequired,
};

export default Withdrawal;
