import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const FuturesBalanceBalancesField = ({ id, children }) => (
  <Field
    label={id ? translate(`futures-balance:${id}`) : ''}
    labelStyle="small line-1-5"
    childrenStyle="line-1-5"
  >
    {children}
  </Field>
);

FuturesBalanceBalancesField.propTypes = {
  id: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default FuturesBalanceBalancesField;
