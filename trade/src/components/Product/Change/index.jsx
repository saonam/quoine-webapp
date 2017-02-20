import React from 'react';

import Percentage from '@quoine/components/Percentage';
import Color from '@quoine/components/ColorByValue';

import image from './image.svg';
import styles from './styles.css';

const ProductChange = ({ product }) => {
  const value = product.priceChange;
  return (
    <div className={styles.main}>
      <Color value={value}>
        <div>
          {isFinite(value) ? (
            <Percentage value={value} />
          ) : '– –'}
        </div>
        {(isFinite(value) && value !== 0) ? (
          <div
            className={`${styles.image} ${value < 0 ? styles.reverse : ''}`}
          >
            <svg width="36" height="36">
              <use xlinkHref={image} />
            </svg>
          </div>
        ) : null}
      </Color>
    </div>
  );
};

ProductChange.propTypes = {
  product: React.PropTypes.shape({
    priceChange: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductChange;
