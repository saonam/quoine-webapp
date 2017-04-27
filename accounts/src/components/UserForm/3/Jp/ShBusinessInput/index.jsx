import PropTypes from 'prop-types';
import React from 'react';

import SelectInput from '@quoine/components/SelectInput';

const options = [
  '株式会社', '有限会社', '投資法人', '特定目的会社', '合名会社',
  '合資会社', '合同会社', '一般社団法人', '一般財団法人', '学校法人',
  '医療法人', '宗教法人', '社会福祉法人', '特定非営利活動法人',
].map(value => ({ label: value, value }));

const JpShBusinessInput = ({ value, onChange, ...others }) => (
  <SelectInput value={value} onChange={onChange} options={options} {...others} />
);

JpShBusinessInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default JpShBusinessInput;
