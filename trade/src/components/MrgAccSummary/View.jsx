import React from 'react';

import t from '@quoine/translate';

import Info from '@quoine/components/InfoHighlight';
import Pnl from 'components/MrgAcc/Pnl';
import Position from 'components/MrgAcc/Position';

import styles from './styles.css';

const MrgAccSummary = ({ mrgAcc }) => (
  mrgAcc ? (
    <div className={styles.main}>
      <div className={styles.position}>
        <Info label={t('mrg-acc:position')}>
          <Position mrgAcc={mrgAcc} />
        </Info>
      </div>
      <div className={styles.pnl}>
        <Info label={t('mrg-acc:pnl')}>
          <Pnl mrgAcc={mrgAcc} />
        </Info>
      </div>
    </div>
  ) : null
);

MrgAccSummary.propTypes = {
  mrgAcc: React.PropTypes.shape({
    pnl: React.PropTypes.number.isRequired,
    position: React.PropTypes.number.isRequired,
  }),
};

export default MrgAccSummary;
