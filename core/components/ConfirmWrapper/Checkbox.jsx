import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import CheckboxInput from '@quoine/components/CheckboxInput';
import Hint from '@quoine/components/Hint';

const ConfirmWrapperCheckboxInput = (props) => (
  <CheckboxInput id={props.id} onChange={props.onToggleSkip} value={props.skip}>
    {translate('confirmation:skip')}
    <span>&nbsp;</span>
    <Hint style={{ width: 200, left: '50%', transform: 'translateX(-50%)' }}>
      {translate('confirmation:skip-hint')}
    </Hint>
  </CheckboxInput>
);

ConfirmWrapperCheckboxInput.propTypes = {
  id: PropTypes.string.isRequired,
  skip: PropTypes.bool.isRequired,
  onToggleSkip: PropTypes.func.isRequired,
};

export default ConfirmWrapperCheckboxInput;
