import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import Body from './Body';

const MrgAccDetailConfirm = ({ onSet, ...others }) => (
  <ConfirmWrapper
    onSet={onSet}
    layout="hero"
    id="mrg-acc-close"
    // ===
    yesLabel={translate('mrg-acc-close:confirm-action')}
    yesStyleName="hero negative-bg"
    // ===
    noLabel={translate('mrg-acc-close:confirm-dismiss')}
  >
    <Body {...others} />
  </ConfirmWrapper>
);

MrgAccDetailConfirm.propTypes = {
  onSet: React.PropTypes.func.isRequired,
};

export default MrgAccDetailConfirm;
