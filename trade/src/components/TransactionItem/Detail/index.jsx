import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Time from '@quoine/components/Time';
import Color from '@quoine/components/Color';
import Money from '@quoine/components/Money';
import Hr from '@quoine/components/Hr';

import Field from './Field';

import styles from './styles.css';


const TransactionItemDetail = ({ trans }) => (
  <div className={styles.main}>

    <Field id="id">
      {trans.id}
    </Field>

    <Field id="quantity-net">
      <Money value={trans.quantityNet} currency={trans.account} />
    </Field>

    <Field id="quantity-gross">
      <Money value={trans.quantityGross} currency={trans.account} />
    </Field>

    <Hr />

    {trans.notes ? (
      <Field id="notes">
        {trans.notes}
      </Field>
    ) : null}

    {trans.businessDate ? (
      <Field id="business-date">
        <Time value={trans.businessDate} type="full" />
      </Field>
    ) : null}

    {trans.loan ? (
      <Field id="loan">
        <div className={styles.loan}>
          <Field id="loan-quantity">
            <Money
              value={trans.loan.quantity}
              currency={trans.loan.account}
            />
          </Field>
          <Color styleName="primary-3">
            &nbsp;@&nbsp;
          </Color>
          <Field id="loan-rate">
            {trans.loan.rate}
          </Field>
        </div>
      </Field>
    ) : null}

    {trans.fee ? (
      <Field id="fee">
        <Money value={trans.fee} currency={trans.account} />
      </Field>
    ) : null}

    {trans.feeExchange ? (
      <Field id="fee-exchange">
        <Money value={trans.feeExchange} currency={trans.account} />
      </Field>
    ) : null}

    {trans.feeNetwork ? (
      <Field id="fee-network">
        <Money value={trans.feeNetwork} currency={trans.account} />
      </Field>
    ) : null}

    {trans.state ? (
      <Field id="state">
        {translate(`trans:state-${trans.state}`)}
      </Field>
    ) : null}

    {trans.hash ? (
      <Field id="hash">
        {trans.hash}
      </Field>
    ) : null}

    <Field id="created-at">
      <Time value={trans.createdAt} type="full" />
    </Field>

  </div>
);

TransactionItemDetail.propTypes = {
  trans: PropTypes.shape({}).isRequired,
};

export default TransactionItemDetail;
