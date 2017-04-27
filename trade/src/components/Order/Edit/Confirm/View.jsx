import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

const OrderEditConfirm = ({ onSet }) => (
  <ConfirmWrapper onSet={onSet} id="order-edit" layout="inline">
    <p>{translate('order-edit:confirm')}</p>
  </ConfirmWrapper>
);

OrderEditConfirm.propTypes = {
  onSet: PropTypes.func.isRequired,
};

export default OrderEditConfirm;
