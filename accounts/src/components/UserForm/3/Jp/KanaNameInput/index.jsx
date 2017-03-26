import React from 'react';

import NameInput from '@quoine/components/NameInput';

const JpKanaNameInput = (props) => (
  <NameInput
    firstLabel="セイ" lastLabel="メイ"
    pattern="[゠-ヿ]+"
    title="カタカナ文字のみ入力してください"
    {...props}
  />
);

JpKanaNameInput.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default JpKanaNameInput;
