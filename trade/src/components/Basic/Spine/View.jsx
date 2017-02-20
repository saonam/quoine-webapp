import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoInline';
import Spine from '@quoine/components/Spine';
import { Margin, Pnl, Balance } from '@quoine/components/Account';

import styles from './styles.css';

const BasicSpine = ({ account }) => (
  <Spine title={translate('account:spine-title')}>
    {account ? (
      <span className={styles.account}>
        <span className={styles.item}>
          <Info label={translate('account:balance')}>
            <Balance account={account} />
          </Info>
        </span>
        <span className={styles.item}>
          <Info label={translate('account:pnl')}>
            <Pnl account={account} />
          </Info>
        </span>
        <span className={styles.item}>
          <Info label={translate('account:margin-used')}>
            <Margin type="used" account={account} />
          </Info>
        </span>
      </span>
    ) : null}
  </Spine>
);

BasicSpine.propTypes = {
  account: React.PropTypes.shape({
    balance: React.PropTypes.number.isRequired,
    pnl: React.PropTypes.number.isRequired,
    marginCoverage: React.PropTypes.number.isRequired,
  }),
};

export default BasicSpine;
