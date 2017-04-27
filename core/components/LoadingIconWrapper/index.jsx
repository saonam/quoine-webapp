import PropTypes from 'prop-types';
import React from 'react';

import LoadingIcon from '@quoine/components/LoadingIcon';

import styles from './styles.css';

const LoadingIconWrapper = ({ type }) => (
  <div className={styles[type]}>
    <LoadingIcon />
  </div>
);

LoadingIconWrapper.propTypes = {
  type: PropTypes.oneOf(['width', 'height', 'full']),
};

LoadingIconWrapper.defaultProps = {
  type: 'full',
};

export default LoadingIconWrapper;
