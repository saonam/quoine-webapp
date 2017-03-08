import React from 'react';

import { Method } from 'components/Fund/Input';

import Bank from './Bank';
import Cash from './Cash';
import List from './List';

import styles from './styles.css';

const FundFiatView = (props) => {
  const form = {
    ...props.form,
    account: props.account,
  };
  const Body = (
    form.account === 'JPY' && form.method === 'cash'
  ) ? Cash : Bank;
  const multipleMethod = (
    form.account === 'JPY' &&
    props.cash &&
    process.env.REACT_APP_VENDOR === 'quoine'
  );

  return (
    <div className={styles.main}>
      {multipleMethod ? (
        <div className={styles.section}>
          <Method form={props.form} onChange={props.onChange} />
        </div>
      ) : null}
      <div className={styles.section}>
        <Body
          form={form}
          onSubmit={props.onSubmit}
          onChange={props.onChange}
          busy={props.busy}
          // ===
          success={props.success}
          onSuccessDismiss={props.onSuccessDismiss}
          // ===
          error={props.error}
        />
      </div>
      <div>
        <List
          form={form}
          funds={props.funds}
          onFundsChange={props.onFundsChange}
        />
      </div>
    </div>
  );
};

FundFiatView.propTypes = {
  ...Bank.propTypes,
  ...List.propTypes,
  account: React.PropTypes.string.isRequired,
};

export default FundFiatView;
