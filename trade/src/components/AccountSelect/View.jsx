import React from 'react';

import Button from './Button';

const AccountSelect = ({ currencies }) => (
  <div>
    {currencies.map(currency => (
      <Button currency={currency} key={currency} />
    ))}
  </div>
);

AccountSelect.propTypes = {
  currencies: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default AccountSelect;
