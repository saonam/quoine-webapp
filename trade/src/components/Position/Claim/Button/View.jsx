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
  onClaim: React.PropTypes.func.isRequired,
  claim: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  position: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
  confirming: React.PropTypes.bool.isRequired,
};

export default PositionClaimButton;
