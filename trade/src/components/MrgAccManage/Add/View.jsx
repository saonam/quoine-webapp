import PropTypes from 'prop-types';
import React from 'react';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import ProductOverview from 'components/ProductOverview';

import styles from './styles.css';

const MrgAccManageAdd = ({ modelKey, onAdd, adding }) => (
  <ButtonWLoading
    className={styles.main} styleName="accent full" onClick={onAdd}
    busy={adding === modelKey}
  >
    <ProductOverview symbol={modelKey} fixed />
  </ButtonWLoading>
);

MrgAccManageAdd.propTypes = {
  adding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  modelKey: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default MrgAccManageAdd;
