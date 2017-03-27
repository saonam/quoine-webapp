import React from 'react';

import translate from '@quoine/translate';

import CheckboxInput from '@quoine/components/CheckboxInput';
import Hint from '@quoine/components/Hint';

const ConfirmWrapperCheckboxInput = (props) => (
  <CheckboxInput id={props.id} onChange={props.onToggleSkip} value={props.skip}>
    {translate('confirmation:skip')}
    <span>&nbsp;</span>
    <Hint>{translate('confirmation:skip-hint')}</Hint>
  </CheckboxInput>
);

ConfirmWrapperCheckboxInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  skip: React.PropTypes.bool.isRequired,
  onToggleSkip: React.PropTypes.func.isRequired,
};

export default ConfirmWrapperCheckboxInput;
