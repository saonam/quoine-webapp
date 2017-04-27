import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';

const AccountDetailSpot = ({ currencies }) => (
  <div>
    <Item currency={currencies ? currencies.base : ''} />
    <Item currency={currencies ? currencies.quote : ''} />
  </div>
);

AccountDetailSpot.propTypes = {
  currencies: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    base: PropTypes.string.isRequired,
  }),
};

export default AccountDetailSpot;
