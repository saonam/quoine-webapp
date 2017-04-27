import PropTypes from 'prop-types';
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
  account: PropTypes.shape({
    isFutures: PropTypes.bool.isRequired,
  }).isRequired,
};

export default WithdrawalStandbyBody;
