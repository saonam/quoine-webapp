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
  onSet: React.PropTypes.func.isRequired,
  market: React.PropTypes.string.isRequired,
  current: React.PropTypes.string.isRequired,
};

export default MarketSelectButton;
