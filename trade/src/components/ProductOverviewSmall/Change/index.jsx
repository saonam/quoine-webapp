import React from 'react';

import Percentage from '@quoine/components/Percentage';
import Color from '@quoine/components/ColorByValue';

import image from './image.svg';
import styles from './styles.css';

const ProductOverviewSmallChange = ({ product }) => {
  const value = product.priceChange;
  return (
    <Color value={value}>
      {value !== 0 ? (
        <svg
          className={value < 0 ? styles.reverse : ''}
          width="10" height="10"
        >
          <use xlinkHref={image} />
        </svg>
      ) : null}
      <Percentage value={value} />
    </Color>
  );
};

ProductOverviewSmallChange.propTypes = {
  product: React.PropTypes.shape({
    priceChange: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductOverviewSmallChange;
