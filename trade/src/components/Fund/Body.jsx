import PropTypes from 'prop-types';
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
  account: PropTypes.shape({
    fundType: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default FundBody;
