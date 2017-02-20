import React from 'react';

import t from '@quoine/translate';

import Price from 'components/Product/Price';
import Volume from 'components/Product/Volume';

import Change from './Change';

import styles from './styles.css';

const ProductOverviewSmall = ({ product }) => (
  product ? (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.symbol}>
          {product.symbol}
        </div>
        <div className={styles.bid}>
          <Price product={product} type="bid" />
        </div>
        <div className={styles.ask}>
          <Price product={product} type="ask" />
        </div>
      </div>
      <div className={styles.bottom}>
        {isFinite(product.priceChange) ? (
          <div className={styles.change}>
            <Change product={product} />
          </div>
        ) : null}
        <div className={styles.volume}>
          <span className={styles.label}>
            {t('product:volume-short')}
            <span>: </span>
          </span>
          <Volume product={product} />
        </div>
      </div>
    </div>
  ) : null
);

ProductOverviewSmall.propTypes = {
  product: React.PropTypes.shape({
    symbol: React.PropTypes.string.isRequired,
  }),
};

export default ProductOverviewSmall;
