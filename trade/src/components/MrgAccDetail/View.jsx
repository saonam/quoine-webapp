import PropTypes from 'prop-types';
import React from 'react';

import Header from './Header';
import Standby from './Standby';
import Confirm from './Confirm';
import Report from './Report';

import styles from './styles.css';

const bodies = {
  standby: Standby,
  confirm: Confirm,
  report: Report,
};

const MrgAccDetail = ({ confirming, reporting }) => {
  let status = 'standby';
  if (confirming) { status = 'confirm'; }
  if (reporting) { status = 'report'; }

  const Body = bodies[status];

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header status={status} />
      </div>
      <div className={styles.body}>
        <Body />
      </div>
    </div>
  );
};

MrgAccDetail.propTypes = {
  confirming: PropTypes.string,
  reporting: PropTypes.string,
};

export default MrgAccDetail;
