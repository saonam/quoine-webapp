import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';

import Select from 'components/INRTransferSelect';

const FundInputINRTransfer = ({ form, onChange }) => (
  <div>
    <Input
      id="fund-inr-transfer"
      label={translate('fund:inr-transfer')}
    >
      <Select
        type="fund"
        value={form.INRTransfer}
        onChange={onChange.INRTransfer}
      />
    </Input>
    <p>
      {translate('fund:inr-transfer-note')}
    </p>
  </div>
);

FundInputINRTransfer.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default FundInputINRTransfer;
