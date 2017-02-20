import React from 'react';

import Filter from '../Filter';
import Report from '../Report';
import List from '../List';

import styles from './styles.css';

const VolumesBodyView = ({ frm, to, onFrmChange, onToChange }) => (
  <div>
    <div className={styles.child}>
      <Filter {...{ frm, to, onFrmChange, onToChange }} />
    </div>
    <div className={styles.child}>
      <Report {...{ frm, to }} />
    </div>
    <div className={styles.child}>
      <List {...{ frm, to }} />
    </div>
  </div>
);

VolumesBodyView.propTypes = {
  frm: React.PropTypes.number.isRequired,
  onFrmChange: React.PropTypes.func.isRequired,
  to: React.PropTypes.number.isRequired,
  onToChange: React.PropTypes.func.isRequired,
};

export default VolumesBodyView;
