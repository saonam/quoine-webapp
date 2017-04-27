import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

const PositionEditConfirm = ({ onSet }) => (
  <ConfirmWrapper
    onSet={onSet}
    id="position-edit"
    layout="inline"
  >
    <p>{translate('position-edit:confirm')}</p>
  </ConfirmWrapper>
);

PositionEditConfirm.propTypes = {
  onSet: PropTypes.func.isRequired,
};

export default PositionEditConfirm;
