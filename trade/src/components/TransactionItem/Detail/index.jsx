import React from 'react';

import translate from '@quoine/translate';

import Time from '@quoine/components/Time';
import Color from '@quoine/components/Color';
import Money from '@quoine/components/Money';
import Info from '@quoine/components/InfoInline';
import Hr from '@quoine/components/Hr';

import styles from './styles.css';

const TransactionItemDetail = ({ trans }) => (
  <div className={styles.main}>

    <div>
      <Info label={translate('trans:id')}>
        {trans.id}
      </Info>
    </div>

    <div>
      <Info label={translate('trans:quantity-net')}>
        <Money value={trans.quantityNet} currency={trans.account} />
      </Info>
    </div>

    <div>
      <Info label={translate('trans:quantity-gross')}>
        <Money value={trans.quantityGross} currency={trans.account} />
      </Info>
    </div>

    <Hr />

    {trans.notes ? (
      <div>
        <Info label={translate('trans:notes')}>
          {trans.notes}
        </Info>
      </div>
    ) : null}

    {trans.businessDate ? (
      <div>
        <Info label={translate('trans:business-date')}>
          <Time value={trans.businessDate} type="full" />
        </Info>
      </div>
    ) : null}

    {trans.loan ? (
      <div>
        <Info label={translate('trans:loan')}>
          <Info label={translate('trans:loan-quantity')}>
            <Money
              value={trans.loan.quantity}
              currency={trans.loan.account}
            />
          </Info>
          <Color styleName="primary-3">
            &nbsp;
            @
            &nbsp;
          </Color>
          <Info label={translate('trans:loan-rate')}>
            {trans.loan.rate}
          </Info>
        </Info>
      </div>
    ) : null}

    {trans.fee ? (
      <div>
        <Info label={translate('trans:fee')}>
          <Money value={trans.fee} currency={trans.account} />
        </Info>
      </div>
    ) : null}

    {trans.feeExchange ? (
      <div>
        <Info label={translate('trans:fee-exchange')}>
          <Money value={trans.feeExchange} currency={trans.account} />
        </Info>
      </div>
    ) : null}

    {trans.feeNetwork ? (
      <div>
        <Info label={translate('trans:fee-network')}>
          <Money value={trans.feeNetwork} currency={trans.account} />
        </Info>
      </div>
    ) : null}

    {trans.state ? (
      <div>
        <Info label={translate('trans:state')}>
          {translate(`trans:state-${trans.state}`)}
        </Info>
      </div>
    ) : null}

    {trans.hash ? (
      <div>
        <Info label={translate('trans:hash')}>
          {trans.hash}
        </Info>
      </div>
    ) : null}

    <div>
      <Info label={translate('trans:created-at')}>
        <Time value={trans.createdAt} type="full" />
      </Info>
    </div>

  </div>
);

TransactionItemDetail.propTypes = {
  trans: React.PropTypes.shape({}).isRequired,
};

export default TransactionItemDetail;
