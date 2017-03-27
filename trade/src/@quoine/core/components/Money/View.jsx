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
  raw: React.PropTypes.string.isRequired,
  significant: React.PropTypes.string.isRequired,
  zeros: React.PropTypes.string,
};

export default MoneyView;
