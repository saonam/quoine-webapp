import React from 'react';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';
import Time from '@quoine/components/Time';
import Color from '@quoine/components/Color';

import styles from './styles.css';

const VolumesFilterStandby = ({ frm, to, onOpen }) => (
  <div className={styles.main}>
    <Button styleName="full primary-4" onClick={onOpen}>
      <div className={styles.content}>
        <Time value={frm} type="dateWithYear" />
        <Color styleName="primary-3">
          &nbsp;→&nbsp;
        </Color>
        <Time value={to} type="dateWithYear" />
        <span className={styles.icon}>
          <Icon glyph="more" />
        </span>
      </div>
    </Button>
  </div>
);

VolumesFilterStandby.propTypes = {
  onOpen: React.PropTypes.func.isRequired,
  frm: React.PropTypes.number.isRequired,
  to: React.PropTypes.number.isRequired,
};

export default VolumesFilterStandby;
