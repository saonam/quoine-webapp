import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import styles from './styles.css';

const OrderCancelConfirmBoxView = ({ onSet, confirming, order }) => (
  confirming && confirming.id === order.id ? (
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

export default OrderCancelConfirmBoxView;
