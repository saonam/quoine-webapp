import React from 'react';

import Loading from '@quoine/components/LoadingIconWrapper';
import Notice from './Notice';

const TransferWrapper = ({ user, Main }) => {
  if (!user.id) {
    return (<Loading />);
  }
  if (user.status !== 'approved') {
    return (<Notice status={user.status} />);
  }
  return (
    <Main />
  );
};

TransferWrapper.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  Main: React.PropTypes.func.isRequired,
};

export default TransferWrapper;
