import React from 'react';

import Futures from 'components/FuturesBalance';

import Form from 'components/Withdrawal/Form';
import List from 'components/Withdrawal/List';

const WithdrawalStandbyBody = ({ account }) => (
  account.isFutures ? (
    <Futures type="withdrawal" />
  ) : (
    <div>
      <Form account={account} />
      <List account={account} />
    </div>
  )
);

WithdrawalStandbyBody.propTypes = {
  account: React.PropTypes.shape({
    isFutures: React.PropTypes.bool.isRequired,
  }).isRequired,
};

export default WithdrawalStandbyBody;
