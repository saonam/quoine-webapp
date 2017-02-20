import React from 'react';

import TransitionGroup from '@quoine/components/TransitionGroup';
import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Item from 'components/TokenItem';
import Add from 'components/TokenAdd';

import styles from './styles.css';

const TokenManage = ({ busy, ids }) => (
  <div>
    <div>
      <Add />
    </div>
    <div className={styles.list}>
      {busy ? (
        <div className={styles.loading}>
          <LoadingIconWrapper />
        </div>
      ) : (
        <TransitionGroup>
          {ids.map(id => (
            <div key={id} className={styles.item}>
              <Item id={id} />
            </div>
          ))}
        </TransitionGroup>
      )}
    </div>
  </div>
);

TokenManage.propTypes = {
  busy: React.PropTypes.bool.isRequired,
  ids: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

export default TokenManage;
