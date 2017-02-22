import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const ConfirmationManageItem = ({ task, onClick }) => (
  <div className={styles.main}>
    <h1 className={styles.text}>
      {translate(`confirmation:task-${task}`)}
    </h1>
    <Button onClick={onClick} styleName="icon negative">
      <Icon glyph="cancel" />
    </Button>
  </div>
);

ConfirmationManageItem.propTypes = {
  task: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default ConfirmationManageItem;
