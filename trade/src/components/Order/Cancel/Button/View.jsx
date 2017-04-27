import PropTypes from 'prop-types';
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
  onCancel: PropTypes.func.isRequired,
  cancel: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  order: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
  }).isRequired,
  confirming: PropTypes.bool.isRequired,
};

export default OrderCancelButtonView;
