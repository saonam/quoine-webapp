import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import Confirm from './Confirm';

import styles from './styles.css';


const IpRemoveView = ({ confirming, ip, ...others }) => {
  if (confirming === ip.id) {
    return <Confirm />;
  }
  return (
    <div className={styles.container}>
      <Button ip={ip} {...others} />
    </div>
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
