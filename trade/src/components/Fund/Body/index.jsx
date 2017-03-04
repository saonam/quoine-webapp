import React from 'react';

import TransferMsgWrapper from 'components/TransferMsgWrapper';
import Content from './Content';

const FundBody = ({ account }) => (
  <TransferMsgWrapper account={account} Content={Content} />
);

FundBody.propTypes = {
  account: React.PropTypes.shape({}).isRequired,
};

export default FundBody;
