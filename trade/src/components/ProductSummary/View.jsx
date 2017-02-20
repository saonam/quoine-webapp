import React from 'react';

import t from '@quoine/translate';

import Info from '@quoine/components/InfoHighlight';

import Price from 'components/Product/Price';
import Change from 'components/Product/Change';

import styles from './styles.css';

const ProductSummary = ({ product }) => (
  product ? (
    <div className={styles.main}>
      <div className={styles.symbol}>
        {product.symbol}
      </div>
      <div className={styles.change}>
        <Change product={product} />
      </div>
      <div className={styles.last}>
        <Info label={t('product:last')}>
          <Price product={product} type="last" />
        </Info>
      </div>
    </div>
  ) : null
);

ProductSummary.propTypes = {
  product: React.PropTypes.shape({
    symbol: React.PropTypes.string.isRequired,
  }),
};

export default ProductSummary;
