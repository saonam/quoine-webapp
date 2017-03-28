import React from 'react';

import translate from '@quoine/translate';

import DateInput from '@quoine/components/DateInput';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const VolumeFilterActive = ({
  onClose, frm, to, onFrmChange, onToChange,
}) => (
  <div className={styles.main}>
    <div className={styles.input}>
      <div className={styles.label}>{translate('volume:from')}</div>
      <div className={styles.select}>
        <DateInput value={frm} onChange={onFrmChange} minYear={2012} />
      </div>
    </div>
    <div className={styles.input}>
      <div className={styles.label}>{translate('volume:to')}</div>
      <div className={styles.select}>
        <DateInput value={to} onChange={onToChange} minYear={2012} />
      </div>
    </div>
    <div className={styles.row}>
      <Button styleName="large full text accent" onClick={onClose}>
        {translate('volume:close')}
      </Button>
    </div>
  </div>
);

VolumeFilterActive.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  frm: React.PropTypes.number.isRequired,
  onFrmChange: React.PropTypes.func.isRequired,
  to: React.PropTypes.number.isRequired,
  onToChange: React.PropTypes.func.isRequired,
};

export default VolumeFilterActive;
