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

const OrderEntry = ({ form, confirming, reporting }) => {
  let status = 'standby';
  if (confirming) { status = 'confirm'; }
  if (reporting) { status = 'report'; }

  const Body = bodies[status];

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header status={status} form={form} />
      </div>
      <div className={styles.body}>
        <Body form={form} />
      </div>
    </div>
  );
};

OrderEntry.propTypes = {
  form: PropTypes.shape({}).isRequired,
  confirming: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  reporting: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]),
};

export default OrderEntry;
