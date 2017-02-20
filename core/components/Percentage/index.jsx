import React from 'react';

import Money from '@quoine/components/Money';

const Percentage = ({ value }) => (
  <Money value={value} currency="percent" />
);

Percentage.propTypes = {
  value: Money.propTypes.value,
};

export default Percentage;
