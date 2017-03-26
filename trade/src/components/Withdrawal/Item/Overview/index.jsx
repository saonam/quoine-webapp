import React from 'react';

import Id from '../Id';
import Time from '../Time';
import Quantity from '../Quantity';
import Cancel from '../Cancel';
import CancelConfirmBox from '../CancelConfirmBox';
import ErrBox from '../ErrBox';

import styles from './styles.css';

const stop = (event) => { event.stopPropagation(); };

const WdrItemOverview = ({ withdrawal }) => (
  <div>
    <div className={styles.main}>
      <div className={styles.row}>
        <span>
          <span>
            <Id withdrawal={withdrawal} />
          </span>
          <span className={styles.time}>
            <Time withdrawal={withdrawal} type="date" />
          </span>
        </span>
        <Quantity withdrawal={withdrawal} />
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        <span onClick={stop}>
          <Cancel withdrawal={withdrawal} />
        </span>
      </div>
    </div>
    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
    <div className={styles.box} onClick={stop}>
      <CancelConfirmBox withdrawal={withdrawal} />
      <ErrBox withdrawal={withdrawal} />
    </div>
  </div>
);

WdrItemOverview.propTypes = {
  withdrawal: React.PropTypes.shape({}).isRequired,
};

export default WdrItemOverview;
