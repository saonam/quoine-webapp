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
  frm: React.PropTypes.number.isRequired,
  onFrmChange: React.PropTypes.func.isRequired,
  to: React.PropTypes.number.isRequired,
  onToChange: React.PropTypes.func.isRequired,
};

export default VolumeBodyView;
