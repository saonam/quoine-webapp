import React from 'react';

import Button from '@quoine/components/Button';
import LoadingIcon from '@quoine/components/LoadingIcon';

import styles from './styles.css';

const ButtonWLoading = ({ children, busy, className, ...other }) => (
  <Button className={`${styles.main} ${className}`} {...other}>
    <div className={busy ? styles.hide : ''}>
      {children}
    </div>
    {busy ? (
      <div className={styles.icon}>
        <LoadingIcon />
      </div>
    ) : null}
  </Button>
);

ButtonWLoading.propTypes = {
  busy: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

ButtonWLoading.defaultProps = {
  className: '',
};

export default ButtonWLoading;
