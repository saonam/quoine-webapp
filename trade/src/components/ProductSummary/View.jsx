import PropTypes from 'prop-types';
import React from 'react';

import t from '@quoine/translate';

import Field from '@quoine/components/Field';

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
        <Field label={t('product:last')} layout="reverse">
          <Price product={product} type="last" />
        </Field>
      </div>
    </div>
  ) : null
);

ProductSummary.propTypes = {
  product: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
  }),
};

export default ProductSummary;
