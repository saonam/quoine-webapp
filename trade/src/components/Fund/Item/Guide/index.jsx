import React from 'react';

import styles from './styles.css';

const FundItemGuide = ({ fund }) => (
  <a
    className={styles.main}
    href={fund.guide}
    target="_blank"
    rel="noopener noreferrer"
  >
    {fund.guide}
  </a>
);

FundItemGuide.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemGuide;
