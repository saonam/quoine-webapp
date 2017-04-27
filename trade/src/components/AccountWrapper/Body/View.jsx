import PropTypes from 'prop-types';
import React from 'react';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Select from './Select';

import styles from './styles.css';

const AccountWrapperBodyView = ({ Body, account, onChange, ...others }) => (
  account ? (
    <div className={styles.main}>
      <div className={styles.input}>
        <Select account={account} onChange={onChange} {...others} />
      </div>
      <div className={styles.body}>
        <Body account={account} {...others} />
      </div>
    </div>
  ) : <LoadingIconWrapper />
);

AccountWrapperBodyView.propTypes = {
  account: PropTypes.shape({
    fundType: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  Body: PropTypes.func.isRequired,
};

export default AccountWrapperBodyView;
