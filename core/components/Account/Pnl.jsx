import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import Color from '@quoine/components/ColorByValue';
import ColorFlashing from '@quoine/components/ColorFlashing';

const getValueKey = (type) => {
  switch (type) {
    case 'realised': return 'Realised';
    default: return '';
  }
};

const AccountPnl = ({ account, type }) => {
  const value = account[`pnl${getValueKey(type)}`];
  return (
    <Color value={value}>
      <ColorFlashing value={value}>
        <Money value={value} currency={account.currency} />
      </ColorFlashing>
    </Color>
  );
};

AccountPnl.propTypes = {
  account: PropTypes.shape({
    pnl: PropTypes.number.isRequired,
    pnlRealised: PropTypes.number,
  }).isRequired,
  type: PropTypes.oneOf(['realised']),
};

export default AccountPnl;
