import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';
import Money from '@quoine/components/Money';
import Info from '@quoine/components/Field';
import Color from '@quoine/components/Color';

import styles from './styles.css';

const OrderEditConfirmBoxView = ({ onSet, confirming, order }) => {
  if (!confirming || confirming.id !== order.id) { return null; }
  const { target, value } = confirming;
  const currency = order[
    target === 'price' ? 'quoteCurrency' : 'baseCurrency'
  ];
  return (
    <div className={styles.main}>
      <ConfirmWrapper onSet={onSet} id="order-edit" layout="box">
        <p>{translate('order-edit:confirm')}</p>
        <p>
          <Info label={translate(`order:${target}`)}>
            <Color styleName="primary-3">
              <Money currency={currency} value={order[target]} />
              <span> → </span>
            </Color>
            <Money currency={currency} value={value} />
          </Info>
        </p>
      </ConfirmWrapper>
    </div>
  );
};

OrderEditConfirmBoxView.propTypes = {
  onSet: PropTypes.func.isRequired,
  confirming: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]),
  order: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
  }).isRequired,
};

export default OrderEditConfirmBoxView;
