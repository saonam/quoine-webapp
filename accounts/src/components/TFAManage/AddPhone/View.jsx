import React from 'react';

import translate from '@quoine/translate';

import FormInline from '@quoine/components/FormInline';
import TextInput from '@quoine/components/TextInput';

import LargeField from 'components/LargeField';

import styles from './styles.css';

const TFAManageAddPhoneView = (props) => (
  <FormInline
    description={translate('tfa-manage:add-phone-description')}
    // ===
    onSubmit={props.onSubmit}
    submitLabel={translate('tfa-manage:add-phone-action')}
    onCancel={props.onCancel}
    // ===
    busy={props.busy}
  >
    <div className={styles.input}>
      <LargeField label={translate('tfa-manage:add-phone-label')} layout="inline">
        <TextInput
          value={props.value} onChange={props.onChange}
          autoFocus border
        />
      </LargeField>
    </div>
  </FormInline>
);

TFAManageAddPhoneView.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default TFAManageAddPhoneView;
