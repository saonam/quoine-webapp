import PropTypes from 'prop-types';
import React from 'react';

import SelectInput from '@quoine/components/SelectInput';

const optionList01 = [
  '給与所得', '事業所得', '利子・配当・投資収益', '年金・恩給', '所得なし',
].map(value => ({ label: value, value }));

// If either "専業主婦（主夫）", "学生" or "無職" is selected, from Occupation box, show only
// "利子・配当・投資収益" and "所得なし" in the Income source box. from @KAN
// take a look https://app.asana.com/0/inbox/318261701576501/356052155503795/356089790224862
const specificOccupationList = [
  '専業主婦（主夫）',
  '学生',
  '無職',
];
const optionList02 = [
  '利子・配当・投資収益',
  '年金・恩給',
  '所得なし',
].map(value => ({ label: value, value }));

const JpSourceInput = ({ value, onChange, occupation, ...others }) => {
  let job = '---';
  let options = optionList01;
  job = occupation && (occupation.job || '---');

  if (specificOccupationList.findIndex(i => i === job) >= 0) {
    options = optionList02;
  }

  return (
    <SelectInput
      value={value} onChange={onChange}
      options={options} searchable
      {...others}
    />
  );
};

JpSourceInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  occupation: PropTypes.shape({}).isRequired,
};

export default JpSourceInput;
