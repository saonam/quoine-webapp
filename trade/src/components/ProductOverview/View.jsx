import React from 'react';

import t from '@quoine/translate';

import Info from '@quoine/components/InfoHighlight';

import Price from 'components/Product/Price';
import PriceLabel from 'components/Product/PriceLabel';
import Change from 'components/Product/Change';
import Volume from 'components/Product/Volume';

import styles from './styles.css';

const ProductOverview = ({ product, fixed }) => (
  product ? (
    <div className={`${styles.main} ${fixed ? styles.fixed : ''}`}>
      <div className={styles.symbol}>
        {product.symbol}
      </div>
      <div className={styles.change}>
        <Change product={product} />
      </div>
      <div className={styles.bid}>
        <Info label={<PriceLabel product={product} type="bid" />}>
          <Price product={product} type="bid" />
        </Info>
      </div>
      <div className={styles.ask}>
        <Info label={<PriceLabel product={product} type="ask" />}>
          <Price product={product} type="ask" />
        </Info>
      </div>
      <div className={styles.volume}>
        <Info label={t('product:volume')}>
          <Volume product={product} />
        </Info>
      </div>
    </div>
  ) : null
);

ProductOverview.propTypes = {
  product: React.PropTypes.shape({
    symbol: React.PropTypes.string.isRequired,
  }),
  fixed: React.PropTypes.bool,
};

export default ProductOverview;
