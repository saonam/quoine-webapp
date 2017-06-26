import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Select from '@quoine/components/SelectInput';

const providers = ['crypto-watch', 'trading-view'];

const ChartsHeaderSelectProvider = ({ provider, onSelectProvider }) => (
  <Field label={translate('charts:provider')} layout="inline">
    <Select
      value={provider} onChange={onSelectProvider}
      options={providers.map(i => ({ label: translate(`charts:provider-${i}`), value: i }))}
    />
  </Field>
);

ChartsHeaderSelectProvider.propTypes = {
  provider: PropTypes.oneOf(['crypto-watch', 'trading-view']).isRequired,
  onSelectProvider: PropTypes.func.isRequired,
};

export default ChartsHeaderSelectProvider;
