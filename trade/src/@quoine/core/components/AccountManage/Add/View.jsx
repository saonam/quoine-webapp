import React from 'react';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

import styles from './styles.css';

const AccountManageAdd = ({ modelKey: currency, onAdd, adding }) => (
  <ButtonWLoading
    className={styles.main} styleName="accent full" onClick={onAdd}
    busy={adding === currency}
  >
    {currency}
  </ButtonWLoading>
);

AccountManageAdd.propTypes = {
  adding: React.PropTypes.string.isRequired,
  modelKey: React.PropTypes.string.isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

export default AccountManageAdd;
