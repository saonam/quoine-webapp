import React from 'react';

import SelectInput from '@quoine/components/SelectInput';

const INRTransferInputView = ({ values, value, onChange, ...others }) => (
  <SelectInput
    value={value}
    options={values.map(v => ({
      label: v, value: v,
    }))}
    onChange={onChange}
    {...others}
  />
);

INRTransferInputView.propTypes = {
  values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  // ===
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default INRTransferInputView;
