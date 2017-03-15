import React from 'react';

import NameInput from '@quoine/components/NameInput';

const JpKanjiNameInput = (props) => (
  <NameInput
    {...props}
    firstLabel="姓" lastLabel="名"
    pattern="[一-龯]+"
    title="全角文字のみ入力してください。"
  />
);

JpKanjiNameInput.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default JpKanjiNameInput;
