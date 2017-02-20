import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import styles from './styles.css';

const OrderCancelConfirmBoxView = ({ onSet, confirming, order }) => (
  confirming.id === order.id ? (
    <div className={styles.main}>
      <ConfirmWrapper
        onSet={onSet}
        id="order-cancel"
        layout="box"
        yesStyleName="negative-bg full text"
      >
        <p>
          {translate('order-cancel:confirm')}
        </p>
      </ConfirmWrapper>
    </div>
  ) : null
);

OrderCancelConfirmBoxView.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  order: React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.string.isRequired,
    ]),
  }).isRequired,
};

export default OrderCancelConfirmBoxView;
