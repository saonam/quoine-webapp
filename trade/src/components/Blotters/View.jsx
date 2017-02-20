import React from 'react';

import translate from '@quoine/translate';

import Tabs from '@quoine/components/Tabs';

import Order from 'components/OrderBlotter';
import Position from 'components/PositionBlotter';
import Execution from 'components/ExecutionBlotter';

import styles from './styles.css';

const Blotters = ({ grow, market }) => {
  const order = {
    id: 'order',
    Element: Order,
    label: translate('order:title'),
  };
  const position = {
    id: 'position',
    Element: Position,
    hidden: market === 'spot',
    label: translate('position:title'),
  };
  const execution = {
    id: 'execution',
    Element: Execution,
    hidden: market === 'futures',
    label: translate('execution:title'),
  };

  // horizontal
  if (grow > 0) {
    return (
      <div className={styles.horizontal}>
        <Tabs
          name="blotter-all" panels={[order, position, execution]}
          // ===
          horizontal
        />
      </div>
    );
  }

  // vertical
  return (
    <div className={styles.vertical}>
      <div className={styles.child}>
        <Tabs name="blotter-top" panels={[order]} />
      </div>
      <div className={styles.child}>
        <Tabs name="blotter-top" panels={[position, execution]} />
      </div>
    </div>
  );
};

Blotters.propTypes = {
  grow: React.PropTypes.number.isRequired,
  market: React.PropTypes.string.isRequired,
};

export default Blotters;
