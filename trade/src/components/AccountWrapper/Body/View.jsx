import React from 'react';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Select from './Select';

import styles from './styles.css';

const AccountWrapperBodyView = ({ Body, account, onChange, ...others }) => (
  account ? (
    <div className={styles.main}>
      <div className={styles.input}>
        <Select account={account} onChange={onChange} />
      </div>
      <div className={styles.body}>
        <Body account={account} {...others} />
      </div>
    </div>
  ) : <LoadingIconWrapper />
);

AccountWrapperBodyView.propTypes = {
  account: React.PropTypes.shape({
    fundType: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
  Body: React.PropTypes.func.isRequired,
};

export default AccountWrapperBodyView;
