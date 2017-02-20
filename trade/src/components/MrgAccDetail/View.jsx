import React from 'react';

import Header from './Header';
import Standby from './Standby';
import Confirm from './Confirm';
import Report from './Report';

import styles from './styles.css';

const MrgAccDetail = ({ activity }) => {
  let Element = Standby;
  if (activity.confirming) { Element = Confirm; }
  if (activity.reporting) { Element = Report; }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header activity={activity} />
      </div>
      <div className={styles.body}>
        <Element />
      </div>
    </div>
  );
};

MrgAccDetail.propTypes = {
  activity: React.PropTypes.shape({}).isRequired,
};

export default MrgAccDetail;
