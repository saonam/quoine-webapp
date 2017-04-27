import PropTypes from 'prop-types';
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
  onSet: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default AccountSelectButton;
