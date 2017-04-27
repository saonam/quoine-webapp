import PropTypes from 'prop-types';
import React from 'react';

import t from '@quoine/translate';

import Field from '@quoine/components/Field';

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
        <Field label={<PriceLabel product={product} type="bid" />} layout="reverse">
          <Price product={product} type="bid" />
        </Field>
      </div>
      <div className={styles.ask}>
        <Field label={<PriceLabel product={product} type="ask" />} layout="reverse">
          <Price product={product} type="ask" />
        </Field>
      </div>
      <div className={styles.volume}>
        <Field label={t('product:volume')} layout="reverse">
          <Volume product={product} />
        </Field>
      </div>
    </div>
  ) : null
);

ProductOverview.propTypes = {
  product: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
  }),
  fixed: PropTypes.bool,
};

export default ProductOverview;
