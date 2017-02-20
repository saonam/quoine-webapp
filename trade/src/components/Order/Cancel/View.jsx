import React from 'react';

import FloatBox from '@quoine/components/FloatBox';

import Button from './Button';
import Confirm from './Confirm';

import styles from './styles.css';

const stop = (e) => {
  e.stopPropagation();
};

const OrderCancelView = ({ activity, order, layout }) => {
  const confirming = activity.confirming.id === order.id;
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
  activity: React.PropTypes.shape({}).isRequired,
  order: React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.string.isRequired,
    ]),
  }).isRequired,
  layout: React.PropTypes.string.isRequired,
};

export default OrderCancelView;
