import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

const PositionClaimConfirm = ({ onSet }) => (
  <ConfirmWrapper
    onSet={onSet}
    id="position-claim"
    layout="inline"
    yesStyleName="negative inline text"
  >
    <p>{translate('position-claim:confirm')}</p>
  </ConfirmWrapper>
);

PositionClaimConfirm.propTypes = {
  onSet: React.PropTypes.func.isRequired,
};

export default PositionClaimConfirm;
