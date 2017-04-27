import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const MrgAccDetailInfo = ({ mrgAcc, Element, side }) => (
  mrgAcc ? (
    <Element mrgAcc={mrgAcc} side={side} />
  ) : (
    <span className={styles.empty}>–</span>
  )
);

MrgAccDetailInfo.propTypes = {
  mrgAcc: PropTypes.shape({}),
  Element: PropTypes.func.isRequired,
  side: PropTypes.oneOf(['short', 'long']).isRequired,
};

export default MrgAccDetailInfo;
