import React from 'react';

import translate from '@quoine/translate';

import FormInline from '@quoine/components/FormInline';
import TextInput from '@quoine/components/TextInput';

import LargeField from 'components/LargeField';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from './styles.css';

const TFAManageAddPhoneView = (props) => (
  <FormInline
    description={translate('tfa-phone:add-phone-description')}
    // ===
    onSubmit={props.onSubmit}
    submitLabel={translate('tfa-phone:add-phone-action')}
    onCancel={props.onCancel}
    // ===
    busy={props.busy}
  >
    <div className={styles.input}>
      <LargeField label={translate('tfa-phone:add-phone-label')} layout="inline">
        <TextInput
          value={props.form.phone} onChange={props.onChange.phone}
          autoFocus border
        />
      </LargeField>
    </div>
  </FormInline>
);

TFAManageAddPhoneView.propTypes = {
  ...FormWrapperPropTypes,
};

export default TFAManageAddPhoneView;
