import React from 'react';

import Header from './Header';
import Standby from './Standby';
import Confirm from './Confirm';
import Report from './Report';

import styles from './styles.css';

const OrderEntry = ({ form, activity }) => {
  let Element = Standby;
  if (activity.confirming) { Element = Confirm; }
  if (activity.reporting) { Element = Report; }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header activity={activity} form={form} />
      </div>
      <div className={styles.body}>
        <Element form={form} />
      </div>
    </div>
  );
};

OrderEntry.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  activity: React.PropTypes.shape({}).isRequired,
};

export default OrderEntry;
