import React from 'react';

import translate from '@quoine/translate';

import Radios from '@quoine/components/Radios';

const YesNoSelect = ({ id, value, onChange }) => (
  <Radios
    id={id}
    value={value}
    onChange={onChange}
    options={['yes', 'no'].map(key => ({
      label: translate(`yes-no:${key}`),
      value: key,
    }))}
  />
);

YesNoSelect.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default YesNoSelect;
