import React from 'react';

import translate from '@quoine/translate';

import Toggle from './Toggle';
import styles from './styles.css';

const getPrefix = (text) => text.split('-')[0];

const getClassName = (index, tasks) => {
  let className = styles.item;
  if (
    index !== 0 &&
    getPrefix(tasks[index]) !== getPrefix(tasks[index - 1])
  ) {
    className = `${className} ${styles.seperator}`;
  }
  return className;
};

const ConfirmationManage = ({ prefs }) => (
  <div>
    <p className={styles.description}>
      {translate('confirmation:description')}
    </p>
    <div className={styles.items}>
      {Object.keys(prefs).map((task, index, tasks) => (
        <div key={task} className={getClassName(index, tasks)}>
          <h1 className={styles.task}>
            {translate(`confirmation:task-${task}`)}
          </h1>
          <div className={styles.confirm}>
            <Toggle task={task} side="confirm" prefs={prefs} />
          </div>
          <div className={styles.report}>
            <Toggle task={task} side="report" prefs={prefs} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

ConfirmationManage.propTypes = {
  prefs: React.PropTypes.shape({}).isRequired,
};

export default ConfirmationManage;
