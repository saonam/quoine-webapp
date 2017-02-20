import React from 'react';

import Button from './Button';
import Confirm from './Confirm';

const TokenRemoveView = ({ confirming, token, ...others }) => {
  if (confirming === token.id) {
    return <Confirm />;
  }
  return <Button token={token} {...others} />;
};

TokenRemoveView.propTypes = {
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
  ]).isRequired,
  token: React.PropTypes.shape({}).isRequired,
};

export default TokenRemoveView;
