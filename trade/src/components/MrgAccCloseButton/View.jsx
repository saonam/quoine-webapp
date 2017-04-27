import PropTypes from 'prop-types';
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
  side: PropTypes.oneOf(['long', 'short', 'both']).isRequired,
  onClose: PropTypes.func.isRequired,
  closingInfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  mrgAcc: PropTypes.shape({
    position: PropTypes.number.isRequired,
    positionLong: PropTypes.number.isRequired,
    positionShort: PropTypes.number.isRequired,
  }),
};

export default MrgAccCloseButton;
