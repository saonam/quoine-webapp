import React from 'react';

import Item from './Item';

const AccountDetailSpot = ({ currencies }) => (
  <div>
    <Item currency={currencies ? currencies.base : ''} />
    <Item currency={currencies ? currencies.quote : ''} />
  </div>
);

AccountDetailSpot.propTypes = {
  currencies: React.PropTypes.shape({
    quote: React.PropTypes.string.isRequired,
    base: React.PropTypes.string.isRequired,
  }),
};

export default AccountDetailSpot;
