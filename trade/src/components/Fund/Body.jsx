import React from 'react';

import Fiat from './Fiat';
import Crypto from './Crypto';
import Futures from './Futures';

const Bodys = { fiat: Fiat, crypto: Crypto, futures: Futures };

const FundBody = ({ account }) => {
  const Body = Bodys[account.fundType];
  return <Body account={account.currency} />;
};

FundBody.propTypes = {
  account: React.PropTypes.shape({
    fundType: React.PropTypes.string.isRequired,
    currency: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default FundBody;
