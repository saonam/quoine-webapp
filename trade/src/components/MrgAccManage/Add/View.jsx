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
  adding: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]).isRequired,
  modelKey: React.PropTypes.string.isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

export default MrgAccManageAdd;
