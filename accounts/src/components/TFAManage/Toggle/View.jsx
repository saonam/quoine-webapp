import React from 'react';

import translate from '@quoine/translate';

import FormInline from '@quoine/components/FormInline';
import TextInput from '@quoine/components/TextInput';
import TFARequest from '@quoine/components/TFARequest';

import LargeField from 'components/LargeField';

import styles from './styles.css';

const TFAManageToggleView = (props) => {
  const side = props.enabled ? 'disable' : 'enable';
  return (
    <div>
      <FormInline
        description={translate('tfa-manage:toggle-description')}
        // ===
        onSubmit={props.onSubmit}
        submitLabel={translate(`tfa-manage:toggle-action-${side}`)}
        onCancel={props.onCancel}
        // ===
        busy={props.busy}
        error={props.error ? translate(props.error) : ''}
      >
        <div className={styles.input}>
          <LargeField label={translate('tfa-manage:toggle-label')} layout="inline">
            <TextInput
              value={props.value} onChange={props.onChange}
              autoFocus border
            />
          </LargeField>
        </div>
      </FormInline>
      <TFARequest />
    </div>
  );
};

TFAManageToggleView.propTypes = {
  value: React.PropTypes.string.isRequired,
  enabled: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
};

export default TFAManageToggleView;
