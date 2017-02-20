import React from 'react';

import ColorBySide from '@quoine/components/ColorBySide';

import styles from './styles.css';

const BookItem = ({ left, center, right, side: rawSide, onClick }) => {
  const side = rawSide.slice(-1) === 's' ? rawSide.slice(0, -1) : rawSide;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles[`main-${side}`]} onClick={onClick}>
      <div className={styles.left}>{left}</div>
      <ColorBySide side={side}>
        <div className={styles.center}>{center}</div>
      </ColorBySide>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

BookItem.propTypes = {
  left: React.PropTypes.node.isRequired,
  center: React.PropTypes.node.isRequired,
  right: React.PropTypes.node.isRequired,
  side: React.PropTypes.oneOf([
    'buy', 'sell', 'buys', 'sells',
  ]).isRequired,
  onClick: React.PropTypes.func,
};

export default BookItem;
