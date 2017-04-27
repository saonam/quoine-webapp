import PropTypes from 'prop-types';
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
  confirming: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  token: PropTypes.shape({}).isRequired,
};

export default TokenRemoveView;
