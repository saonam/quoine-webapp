import PropTypes from 'prop-types';
import React from 'react';

import FloatBox from '@quoine/components/FloatBox';

import Button from './Button';
import Confirm from './Confirm';

import styles from './styles.css';

const stop = (event) => {
  event.stopPropagation();
};

const OrderCancelView = ({ activity, order, layout }) => {
  const confirming = !!(activity && activity.id === order.id);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.main} onClick={stop}>
      {confirming && layout === 'horizontal' ? (
        <div className={styles.confirm}>
          <FloatBox color="negative"><Confirm /></FloatBox>
        </div>
      ) : null}
      <Button confirming={confirming} order={order} />
    </div>
  );
};

OrderCancelView.propTypes = {
  activity: PropTypes.shape({}),
  order: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
  }).isRequired,
  layout: PropTypes.string.isRequired,
};

export default OrderCancelView;
