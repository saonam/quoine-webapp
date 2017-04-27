import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

const OrderCancelConfirm = ({ onSet }) => (
  <ConfirmWrapper
    onSet={onSet}
    id="order-cancel"
    layout="inline"
    yesStyleName="negative-bg inline text"
  >
    <p>
      {translate('order-cancel:confirm')}
    </p>
  </ConfirmWrapper>
);

OrderCancelConfirm.propTypes = {
  onSet: PropTypes.func.isRequired,
};

export default OrderCancelConfirm;
