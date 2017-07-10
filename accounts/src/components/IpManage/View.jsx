import PropTypes from 'prop-types';
import React from 'react';

import TransitionGroup from '@quoine/components/TransitionGroup';
import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Item from 'components/IpItem';
import Add from 'components/IpAdd';

import styles from './styles.css';

const IpManage = ({ busy, ids }) => (
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

IpManage.propTypes = {
  busy: PropTypes.bool.isRequired,
  ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default IpManage;
