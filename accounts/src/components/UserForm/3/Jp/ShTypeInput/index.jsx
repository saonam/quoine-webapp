import PropTypes from 'prop-types';
import React from 'react';

import RadioInput from '@quoine/components/RadioInput';

const keys1 = ['株式会社', '有限会社', '投資法人', '特定目的会社'];

const options1 = [
  '議決権が50％を超える個人',
  '議決権が25％を超える個人',
  '出資、融資、取引その他の関係を通じて事業活動に支配的な影響力を有すると認められる個人',
  '法人を代表し、その法人の業務を執行する個人',
].map(value => ({ label: value, value }));

const options2 = [
  '事業収益、事業財産の25％を超える配当等を受ける権利を有する個人',
  '出資、融資、取引その他の関係を通じて事業活動に支配的な影響力を有すると認められる個人',
  '法人を代表し、その法人の業務を執行する個人',
].map(value => ({ label: value, value }));

const JpShTypeInput = ({ business, value, onChange, id, required }) => {
  const options = keys1.indexOf(business) !== -1 ? options1 : options2;
  return (
    <div>
      {options.map(option => (
        <div key={option.value}>
          <RadioInput
            name={id}
            value={value}
            option={option.value}
            onChange={onChange}
            required={required}
          >
            <p style={{ lineHeight: '24px' }}>
              {option.label}
            </p>
          </RadioInput>
        </div>
      ))}
    </div>
  );
};

JpShTypeInput.propTypes = {
  business: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default JpShTypeInput;
