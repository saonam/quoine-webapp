import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Item from './Item';

import styles from './styles.css';

const ConfirmationManage = ({ skips }) => (
  <div>
    <p className={styles.help}>
      {translate('confirmation:help')}
    </p>
    <p className={styles.help}>
      {translate(`confirmation:help-${
        skips.length === 0 ? 'none' : 'some'
      }`)}
    </p>
    <div className={styles.items}>
      {skips.map(task => (
        <div className={styles.item} key={task}>
          <Item task={task} />
        </div>
      ))}
    </div>
  </div>
);

ConfirmationManage.propTypes = {
  skips: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ConfirmationManage;
