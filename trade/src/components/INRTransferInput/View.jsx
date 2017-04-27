import PropTypes from 'prop-types';
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
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  // ===
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default INRTransferInputView;
