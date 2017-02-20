import React from 'react';

import translate from '@quoine/translate';

import Checkbox from '@quoine/components/Checkbox';

const ConfirmationManageToggle = ({ onToggle, prefs, task, side }) => (
  <Checkbox
    onChange={onToggle} id={`${task}-${side}`} value={prefs[task][side]}
  >
    {translate(`confirmation:toggle-${side}`)}
  </Checkbox>
);

ConfirmationManageToggle.propTypes = {
  onToggle: React.PropTypes.func.isRequired,
  prefs: React.PropTypes.shape({}).isRequired,
  task: React.PropTypes.string.isRequired,
  side: React.PropTypes.string.isRequired,
};

export default ConfirmationManageToggle;
