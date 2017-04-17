import React from 'react';

import translate from '@quoine/translate';

import TransitionGroup from '@quoine/components/TransitionGroup';

import Item from 'components/Withdrawal/Item';

import styles from './styles.css';

const WdrListBody = ({ withdrawals }) => (
  withdrawals.length === 0 ? (
    <p className={styles.empty}>
      {translate('withdrawal:recent-empty')}
    </p>
  ) : (
    <TransitionGroup>
      {withdrawals.map(withdrawal => (
        <div className={styles.item} key={withdrawal.id}>
          <Item withdrawal={withdrawal} />
        </div>
      ))}
    </TransitionGroup>
  )
);

WdrListBody.propTypes = {
  withdrawals: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default WdrListBody;
