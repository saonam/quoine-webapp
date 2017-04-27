import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

/* eslint-disable jsx-a11y/no-static-element-interactions */
const ExpanderView = ({ expand, onToggle, Overview, Detail, ...others }) => (
  <div>
    <div className={styles.overview} onClick={onToggle}>
      <Overview {...others} />
    </div>
    {expand ? <Detail {...others} /> : null}
  </div>
);

ExpanderView.propTypes = {
  Overview: PropTypes.func.isRequired,
  Detail: PropTypes.func.isRequired,
  // ==
  expand: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ExpanderView;
