import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

const PositionCloseConfirm = ({ onSet }) => (
  <ConfirmWrapper
    onSet={onSet}
    id="position-close"
    layout="inline"
    yesStyleName="negative inline text"
  >
    <p>{translate('position-close:confirm')}</p>
  </ConfirmWrapper>
);

PositionCloseConfirm.propTypes = {
  onSet: React.PropTypes.func.isRequired,
};

export default PositionCloseConfirm;
