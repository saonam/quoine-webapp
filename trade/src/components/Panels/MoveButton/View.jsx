import React from 'react';

import Icon from '@quoine/components/Icon';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const LayoutMoveButton = ({ panel, side, onMove }) => {
  if (panel.grow < 0) { return null; }

  const isOk = (
    (side === 'left' && panel.order !== panel.minOrder) ||
    (side === 'right' && panel.order !== panel.maxOrder)
  );

  return (
    <div className={styles.main}>
      {isOk ? (
        <Button styleName="icon primary-2 block" onClick={onMove}>
          <Icon glyph={`chevron-${side}`} height={18} width={18} />
        </Button>
      ) : null}
    </div>
  );
};

LayoutMoveButton.propTypes = {
  side: React.PropTypes.oneOf(['left', 'right']).isRequired,
  onMove: React.PropTypes.func.isRequired,
  panel: React.PropTypes.shape({
    order: React.PropTypes.number.isRequired,
    minOrder: React.PropTypes.number.isRequired,
    maxOrder: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default LayoutMoveButton;
