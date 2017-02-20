import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import Select from '@quoine/components/Select';

const WdrBankSelect = ({ current, onChange, all }) => (
  <Input
    id="withdrawal-bank"
    label={translate('withdrawal:bank')}
  >
    <Select
      value={current}
      onChange={onChange}
      options={all.map(bank => ({
        label: bank['bank-name'], value: bank.id,
      }))}
    />
  </Input>
);

WdrBankSelect.propTypes = {
  current: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
  all: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default WdrBankSelect;
