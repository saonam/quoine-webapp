import PropTypes from 'prop-types';
import React from 'react';

import NameInput from '@quoine/components/NameInput';

const JpKanaNameInput = (props) => (
  <NameInput
    firstLabel="メイ" lastLabel="セイ"
    pattern="[゠-ヿ]+"
    title="カタカナ文字のみ入力してください"
    reverse
    {...props}
  />
);

JpKanaNameInput.propTypes = {
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default JpKanaNameInput;
