import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

const OrderEditConfirm = ({ onSet }) => (
  <ConfirmWrapper onSet={onSet} id="order-edit" layout="inline">
    <p>{translate('order-edit:confirm')}</p>
  </ConfirmWrapper>
);

OrderEditConfirm.propTypes = {
  onSet: React.PropTypes.func.isRequired,
};

export default OrderEditConfirm;
