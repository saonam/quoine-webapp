import PropTypes from 'prop-types';
import React from 'react';

import ColorBySide from '@quoine/components/ColorBySide';

import styles from './styles.css';

const BookItem = ({ left, center, right, side: rawSide, onClick, bg }) => {
  const side = rawSide.slice(-1) === 's' ? rawSide.slice(0, -1) : rawSide;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles[`main-${side}`]} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.left}>{left}</div>
        <ColorBySide side={side}>
          <div className={styles.center}>{center}</div>
        </ColorBySide>
        <div className={styles.right}>{right}</div>
      </div>
      {bg ? (
        <div className={styles[`bg-${side}`]} style={{ width: `${bg}%` }} />
      ) : null}
    </div>
  );
};

BookItem.propTypes = {
  left: PropTypes.node.isRequired,
  center: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
  side: PropTypes.oneOf([
    'buy', 'sell', 'buys', 'sells',
  ]).isRequired,
  onClick: PropTypes.func,
  bg: PropTypes.number,
};

export default BookItem;
