import React from 'react';

import Carousel from '@quoine/components/Carousel';
import Loading from '@quoine/components/LoadingIconWrapper';

import Button from '../Button';

import styles from './styles.css';

const ProductSelectListView = ({ symbols, current }) => (
  symbols.length !== 0 ? (
    <Carousel height={3} usePadding>
      <div className={styles.main}>
        {symbols
        .filter(symbol => symbol !== current)
        .map(symbol => (
          <div className={styles.button} key={symbol}>
            <Button symbol={symbol} />
          </div>
        ))}
      </div>
    </Carousel>
  ) : (
    <Loading />
  )
);

ProductSelectListView.propTypes = {
  symbols: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  current: React.PropTypes.string.isRequired,
};

export default ProductSelectListView;
