import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const OrderCancelButtonView = ({ confirming, order, cancel, onCancel }) => (
  <Button
    styleName="text inline negative disabled-primary-2"
    onClick={onCancel}
    busy={cancel.id === order.id}
    disabled={confirming}
  >
    {translate('order-cancel:title')}
  </Button>
);

OrderCancelButtonView.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  cancel: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  order: React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.string.isRequired,
    ]),
  }).isRequired,
  confirming: React.PropTypes.bool.isRequired,
};

export default OrderCancelButtonView;
