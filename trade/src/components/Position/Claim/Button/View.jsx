import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const PositionClaimButton = ({ confirming, position, claim, onClaim }) => (
  <Button
    styleName="text inline negative disabled-primary-2"
    onClick={onClaim}
    busy={claim.id === position.id}
    disabled={confirming}
  >
    {translate('position-claim:title')}
  </Button>
);

PositionClaimButton.propTypes = {
  onClaim: PropTypes.func.isRequired,
  claim: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  position: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  confirming: PropTypes.bool.isRequired,
};

export default PositionClaimButton;
