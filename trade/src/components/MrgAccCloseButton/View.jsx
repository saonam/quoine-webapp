import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

import styles from './styles.css';

const isCloseable = (mrgAcc, side) => {
  if (!mrgAcc) { return false; }
  switch (side) {
    case 'long': return mrgAcc.positionLong !== 0;
    case 'short': return mrgAcc.positionShort !== 0;
    default: return (
      mrgAcc.positionLong !== 0 || mrgAcc.positionShort !== 0
    );
  }
};

const MrgAccCloseButton = ({ mrgAcc, closingInfo, onClose, side }) => {
  const closing = mrgAcc ? closingInfo === `${mrgAcc.name}${side}` : false;
  const disabled = closing || !isCloseable(mrgAcc, side);
  const styleName = side === 'both' ? (
    'hero negative-bg disabled-primary-2-bg'
  ) : 'full text large negative disabled-primary-2';
  const className = side === 'both' ? '' : styles.side;
  return (
    <Button
      styleName={styleName} className={className}
      busy={closing} onClick={onClose} disabled={disabled}
    >
      {translate(`mrg-acc-close:action-${side}`)}
    </Button>
  );
};

MrgAccCloseButton.propTypes = {
  side: React.PropTypes.oneOf(['long', 'short', 'both']).isRequired,
  onClose: React.PropTypes.func.isRequired,
  closingInfo: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]).isRequired,
  mrgAcc: React.PropTypes.shape({
    position: React.PropTypes.number.isRequired,
    positionLong: React.PropTypes.number.isRequired,
    positionShort: React.PropTypes.number.isRequired,
  }),
};

export default MrgAccCloseButton;
