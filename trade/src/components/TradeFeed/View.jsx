import React from 'react';
import TransitionGroup from '@quoine/components/TransitionGroup';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';
import Loading from '@quoine/components/LoadingIconWrapper';
import Item from './Item';

import styles from './styles.css';

const TradeFeed = ({ keys, busy }) => {
  const items = keys.map(id => (
    <Item key={id} id={id} />
  ));
  return (
    <div className={styles.main}>
      <Header styleName="text center primary-1">
        {translate('trade-feed:title')}
      </Header>
      <div className={styles.body}>
        {!busy ? (
          <TransitionGroup>
            {items}
          </TransitionGroup>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

TradeFeed.propTypes = {
  keys: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default TradeFeed;
