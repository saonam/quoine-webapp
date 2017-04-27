import PropTypes from 'prop-types';
import React from 'react';

import Percentage from '@quoine/components/Percentage';
import Progress from '@quoine/components/Progress';
import ColorFlashing from '@quoine/components/ColorFlashing';

import styles from './styles.css';

const OrderProgress = ({ order }) => {
  const value = order.quantityFilled / order.quantity;
  return (
    <div className={styles.main}>
      <div className={styles.percentage}>
        <ColorFlashing value={value}>
          <Percentage value={value} />
        </ColorFlashing>
      </div>
      <div className={styles.progress}>
        <Progress value={value} />
      </div>
    </div>
  );
};

OrderProgress.propTypes = {
  order: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    quantityFilled: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderProgress;
