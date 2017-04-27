import PropTypes from 'prop-types';
import React from 'react';

import t from '@quoine/translate';

import Button from '@quoine/components/Button';

const MarketSelectButton = ({ onSet, market, current }) => (
  <Button
    styleName={`text inline ${
      current === market ? 'accent' : 'primary-3'
    }`}
    disabled={current === market}
    onClick={onSet}
  >
    {t(`market:${market}`)}
  </Button>
);

MarketSelectButton.propTypes = {
  onSet: PropTypes.func.isRequired,
  market: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default MarketSelectButton;
