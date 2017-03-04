import React from 'react';

import TransferMsgWrapper from 'components/TransferMsgWrapper';
import Content from './Content';

const WdrMsgWrapper = ({ account }) => (
  <TransferMsgWrapper account={account} Content={Content} />
);

WdrMsgWrapper.propTypes = {
  account: React.PropTypes.shape({}).isRequired,
};

export default WdrMsgWrapper;
