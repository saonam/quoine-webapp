import React from 'react';

import translate from '@quoine/translate';

import Time from '@quoine/components/Time';
import ColorBySide from '@quoine/components/ColorBySide';
import Money from '@quoine/components/Money';

import styles from './styles.css';

const TransItemOverview = ({ trans }) => (
  <div className={styles.main}>
    <div className={styles.created}>
      <Time value={trans.createdAt} type="time" />
    </div>
    <div className={styles.type}>
      {translate(`trans:type-${trans.type}`)}
    </div>
    <div className={styles.quantity}>
      <ColorBySide side={trans.direction}>
        {trans.direction === 'in' ? '+' : '-'}
        &nbsp;
        <Money value={trans.quantityNet} currency={trans.account} />
      </ColorBySide>
    </div>
  </div>
);

TransItemOverview.propTypes = {
  trans: React.PropTypes.shape({}).isRequired,
};

export default TransItemOverview;
