import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import Confirm from './Confirm';


const IpRemoveView = ({ confirming, ip, ...others }) => {
  if (confirming === ip.id) {
    return <Confirm />;
  }
  return (
    <Button ip={ip} {...others} />
  );
};

IpRemoveView.propTypes = {
  confirming: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  ip: PropTypes.shape({}).isRequired,
};

export default IpRemoveView;
