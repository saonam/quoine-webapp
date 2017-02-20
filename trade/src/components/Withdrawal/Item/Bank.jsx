import React from 'react';

const WdrItemBank = ({ withdrawal }) => (
  withdrawal.bankAccount ? (
    <span>
      {`${
        withdrawal.bankAccount.bank
      } (${
        withdrawal.bankAccount.accNumber
      })`}
    </span>
  ) : null
);

WdrItemBank.propTypes = {
  withdrawal: React.PropTypes.shape({}).isRequired,
};

export default WdrItemBank;
