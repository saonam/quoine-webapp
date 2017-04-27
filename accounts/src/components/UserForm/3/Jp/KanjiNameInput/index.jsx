import PropTypes from 'prop-types';
import React from 'react';

import NameInput from '@quoine/components/NameInput';

const JpKanjiNameInput = (props) => (
  <NameInput firstLabel="姓" lastLabel="名" {...props} />
);

JpKanjiNameInput.propTypes = {
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default JpKanjiNameInput;
