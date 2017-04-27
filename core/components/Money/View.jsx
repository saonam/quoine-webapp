import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const MoneyView = ({ significant, zeros, raw }) => (
  <span className={styles.main} title={raw}>
    <span>{significant}</span>
    {zeros ? (
      <span className={styles.light}>
        {zeros}
      </span>
    ) : null}
  </span>
);

MoneyView.propTypes = {
  raw: PropTypes.string.isRequired,
  significant: PropTypes.string.isRequired,
  zeros: PropTypes.string,
};

export default MoneyView;
