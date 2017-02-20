import React from 'react';

import translate from '@quoine/translate';

import Balances from './Balances';
import Form from './Form';

import styles from './styles.css';

const FuturesBalanceView = (props) => (
  <div className={styles.main}>

    <p className={styles.help}>
      {translate(`futures-balance:help-${props.type}`)}
    </p>

    <div className={styles.item}>
      <Balances {...props} />
    </div>

    <div className={styles.item}>
      <Form {...props} />
    </div>

  </div>
);

FuturesBalanceView.propTypes = {
  ...Balances.propTypes,
  ...Form.propTypes,
  type: React.PropTypes.oneOf(['fund', 'withdrawal']),
};

export default FuturesBalanceView;
