import React from 'react';

import Futures from 'components/FuturesBalance';

import Form from 'components/Withdrawal/Form';
import List from 'components/Withdrawal/List';

const WdrBodyContent = ({ account }) => (
  account.isFutures ? (
    <Futures type="withdrawal" />
  ) : (
    <div>
      <Form account={account} />
      <List account={account} />
    </div>
  )
);

WdrBodyContent.propTypes = {
  account: React.PropTypes.shape({
    isFutures: React.PropTypes.bool.isRequired,
  }).isRequired,
};

export default WdrBodyContent;
