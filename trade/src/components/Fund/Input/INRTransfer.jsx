import React from 'react';

import translate from '@quoine/translate';

import Select from 'components/INRTransferInput';
import Field from 'components/Transfer/Field';

const FundInputINRTransfer = ({ form, onChange }) => (
  <div>
    <Field label={translate('fund:inr-transfer')}>
      <Select
        type="fund"
        value={form.INRTransfer}
        onChange={onChange.INRTransfer}
        border required
      />
    </Field>
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
