import React from 'react';

import WdrBankForm from 'components/WdrBank/Form';

import Standby from './Standby';

import styles from './styles.css';

const Withdrawal = ({ adding, editting }) => (
  <div className={styles.main}>
    <div
      // Hide `Standby` by `css` to keep Withdrawal Data
      className={adding || editting ? styles.none : styles.body}
    >
      <Standby />
    </div>
    {adding ? <WdrBankForm action="add" /> : null}
    {editting ? <WdrBankForm action="edit" /> : null}
  </div>
);

Withdrawal.propTypes = {
  adding: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
  editting: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
};

export default Withdrawal;
