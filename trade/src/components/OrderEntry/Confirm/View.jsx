import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import Body from './Body';

const OrderEntryConfirm = ({ onSet, form, side }) => (
  <ConfirmWrapper
    onSet={onSet}
    id="order-add"
    layout="hero"
    // ===
    yesLabel={translate('order-add:confirm-action')}
    noLabel={translate('order-add:confirm-dismiss')}
  >
    <Body form={form} side={side} />
  </ConfirmWrapper>
);

OrderEntryConfirm.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  form: Body.propTypes.form,
  side: Body.propTypes.side,
};

export default OrderEntryConfirm;
