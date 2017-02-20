import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const OrderEntryButton = ({
  side, submitting, onSetForm, onSubmit, validation,
}) => (
  <div onMouseEnter={onSetForm}>
    <Button
      styleName={`hero disabled-primary-2-bg ${
        side === 'buy' ? 'positive' : 'negative'
      }-bg`}
      disabled={validation} onClick={onSubmit} busy={submitting === side}
    >
      {translate(`order:side-${side}`)}
    </Button>
  </div>
);

OrderEntryButton.propTypes = {
  side: React.PropTypes.oneOf(['buy', 'sell']).isRequired,
  submitting: React.PropTypes.string.isRequired,
  validation: React.PropTypes.string.isRequired,
  onSetForm: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default OrderEntryButton;
