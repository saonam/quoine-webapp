import PropTypes from 'prop-types';
import React from 'react';

import Id from '../Id';
import Amount from '../Amount';
import Time from '../Time';

import styles from './styles.css';

const FundItemOverview = ({ fund }) => (
  <div className={styles.main}>
    <span>
      <span>
        <Id fund={fund} />
      </span>
      <span className={styles.time}>
        <Time fund={fund} type="date" />
      </span>
    </span>
    <Amount fund={fund} />
  </div>
);

FundItemOverview.propTypes = {
  fund: PropTypes.shape({}).isRequired,
};

export default FundItemOverview;
