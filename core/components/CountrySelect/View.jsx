import React from 'react';

import Select from '@quoine/components/Select';

const CountrySelectView = ({ countries, value, onChange }) => (
  <Select
    options={countries.map(country => ({
      label: country.name, value: country.iso,
    }))}
    value={value}
    onChange={onChange}
    searchable
  />
);

CountrySelectView.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  countries: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default CountrySelectView;
