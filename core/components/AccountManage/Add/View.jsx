import PropTypes from 'prop-types';
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
  adding: PropTypes.string.isRequired,
  modelKey: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AccountManageAdd;
