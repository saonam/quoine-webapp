import React from 'react';
import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import TFARequest from '@quoine/components/TFARequest';

const WdrInputCode = ({ form, onChange }) => (
  <div>
    <Input id="withdrawal-code" label={translate('withdrawal:code')}>
      <TextBox
        value={form.code}
        onChange={onChange.code}
        required
        type="password"
      />
    </Input>
    <TFARequest skipFirst useEmail />
  </div>
);

WdrInputCode.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default WdrInputCode;
