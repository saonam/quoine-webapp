import React from 'react';

import Button from '@quoine/components/Button';

const AccountSelectButton = ({ onSet, currency, current }) => (
  <Button
    styleName={`text inline ${
      current === currency ? 'accent' : 'primary-3'
    }`}
    disabled={current === currency}
    onClick={onSet}
  >
    {currency === 'XBT' ? 'BTC (Futures)' : currency}
  </Button>
);

AccountSelectButton.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  currency: React.PropTypes.string.isRequired,
  current: React.PropTypes.string.isRequired,
};

export default AccountSelectButton;
