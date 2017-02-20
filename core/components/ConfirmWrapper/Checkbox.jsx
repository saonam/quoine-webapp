import React from 'react';

import translate from '@quoine/translate';

import Checkbox from '@quoine/components/Checkbox';
import Hint from '@quoine/components/Hint';

const ConfirmWrapperCheckbox = (props) => (
  <Checkbox id={props.id} onChange={props.onToggleSkip} value={props.skip}>
    {translate('confirmation:skip')}
    <span>&nbsp;</span>
    <Hint>{translate('confirmation:skip-hint')}</Hint>
  </Checkbox>
);

ConfirmWrapperCheckbox.propTypes = {
  id: React.PropTypes.string.isRequired,
  skip: React.PropTypes.bool.isRequired,
  onToggleSkip: React.PropTypes.func.isRequired,
};

export default ConfirmWrapperCheckbox;
