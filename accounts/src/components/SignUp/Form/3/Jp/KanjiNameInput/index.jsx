import React from 'react';

import NameInput from '@quoine/components/NameInput';

const JpKanjiNameInput = (props) => (
  <NameInput {...props} firstLabel="姓" lastLabel="名" />
);

JpKanjiNameInput.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default JpKanjiNameInput;
