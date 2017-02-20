import React from 'react';

import Select from '@quoine/components/Select';

const INRTransferSelectView = ({ values, value, onChange }) => (
  <Select
    value={value}
    options={values.map(v => ({
      label: v, value: v,
    }))}
    onChange={onChange}
  />
);

INRTransferSelectView.propTypes = {
  values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  // ===
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default INRTransferSelectView;
