import React from 'react';

import Button from '@quoine/components/Button';
import Overview from 'components/ProductOverviewSmall';

import styles from './styles.css';

const ProductSelectButton = ({ onSet, symbol }) => (
  <Button styleName="primary-4 block" onClick={onSet}>
    <div className={styles.content}>
      <Overview symbol={symbol} />
    </div>
  </Button>
);

ProductSelectButton.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  symbol: React.PropTypes.string.isRequired,
};

export default ProductSelectButton;
