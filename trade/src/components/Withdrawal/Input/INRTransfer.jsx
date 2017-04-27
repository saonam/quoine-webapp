import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Select from 'components/INRTransferInput';
import Field from 'components/Transfer/Field';

const WdrInputINRTransfer = ({ form, onChange }) => (
  <div>
    <Field label={translate('withdrawal:inr-transfer')}>
      <Select
        type="withdrawal"
        value={form.INRTransfer}
        onChange={onChange.INRTransfer}
        border
        required
      />
    </Field>
    <p>
      {translate('withdrawal:inr-transfer-note')}
    </p>
  </div>
);

WdrInputINRTransfer.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrInputINRTransfer;
