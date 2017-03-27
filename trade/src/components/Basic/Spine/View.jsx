import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Spine from '@quoine/components/Spine';
import { Margin, Pnl, Balance } from '@quoine/components/Account';

import styles from './styles.css';

const Item = ({ children, labelKey }) => (
  <div className={styles.item}>
    <Field label={translate(`account:${labelKey}`)} layout="inline">
      {children}
    </Field>
  </div>
);

Item.propTypes = {
  children: React.PropTypes.node.isRequired,
  labelKey: React.PropTypes.string.isRequired,
};

const BasicSpine = ({ account }) => (
  <Spine title={translate('account:spine-title')}>
    {account ? (
      <div className={styles.main}>
        <Item labelKey="balance">
          <Balance account={account} />
        </Item>
        <Item labelKey="pnl">
          <Pnl account={account} />
        </Item>
        <Item labelKey="margin-used">
          <Margin type="used" account={account} />
        </Item>
      </div>
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
