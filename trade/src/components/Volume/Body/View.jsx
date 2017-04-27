import PropTypes from 'prop-types';
import React from 'react';

import Filter from '../Filter';
import Report from '../Report';
import List from '../List';

import styles from './styles.css';

const VolumeBodyView = ({ frm, to, onFrmChange, onToChange }) => (
  <div>
    <div className={styles.child}>
      <Filter {...{ frm, to, onFrmChange, onToChange }} />
    </div>
    {process.env.REACT_APP_VENDOR !== 'traders' ? (
      <div className={styles.child}>
        <Report {...{ frm, to }} />
      </div>
    ) : null}
    <div className={styles.child}>
      <List {...{ frm, to }} />
    </div>
  </div>
);

VolumeBodyView.propTypes = {
  frm: PropTypes.number.isRequired,
  onFrmChange: PropTypes.func.isRequired,
  to: PropTypes.number.isRequired,
  onToChange: PropTypes.func.isRequired,
};

export default VolumeBodyView;
