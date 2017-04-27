import PropTypes from 'prop-types';
import React from 'react';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const WdrRecentAddressView = ({ address, onClick }) => (
  <Button
    className={styles.main}
    styleName="full primary-3"
    onClick={onClick}
  >
    {`${address.slice(0, 24)}…`}
  </Button>
);

WdrRecentAddressView.propTypes = {
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WdrRecentAddressView;
