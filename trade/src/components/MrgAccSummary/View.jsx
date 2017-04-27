import PropTypes from 'prop-types';
import React from 'react';

import Pnl from 'components/MrgAcc/Pnl';
import Position from 'components/MrgAcc/Position';

import Field from './Field';

import styles from './styles.css';

const MrgAccSummary = ({ mrgAcc }) => (
  mrgAcc ? (
    <div className={styles.main}>
      <div className={styles.position}>
        <Field id="position"><Position mrgAcc={mrgAcc} /></Field>
      </div>
      <div className={styles.pnl}>
        <Field id="pnl"><Pnl mrgAcc={mrgAcc} /></Field>
      </div>
    </div>
  ) : null
);

MrgAccSummary.propTypes = {
  mrgAcc: PropTypes.shape({
    pnl: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
  }),
};

export default MrgAccSummary;
