import React from 'react';

import NameInput from '@quoine/components/NameInput';

const JpKanaNameInput = (props) => (
  <NameInput
    {...props}
    firstLabel="セイ" lastLabel="メイ"
    pattern="[゠-ヿ]+"
    title="カタカナ文字のみ入力してください"
  />
);

JpKanaNameInput.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default JpKanaNameInput;
