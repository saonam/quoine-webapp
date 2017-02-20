import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';

import Select from 'components/INRTransferSelect';

const WdrInputINRTransfer = ({ form, onChange }) => (
  <div>
    <Input
      id="withdrawal-inr-transfer"
      label={translate('withdrawal:inr-transfer')}
    >
      <Select
        type="withdrawal"
        value={form.INRTransfer}
        onChange={onChange.INRTransfer}
      />
    </Input>
    <p>
      {translate('withdrawal:inr-transfer-note')}
    </p>
  </div>
);

WdrInputINRTransfer.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default WdrInputINRTransfer;
