import React from 'react';

import translate from '@quoine/translate';

import FormInline from '@quoine/components/FormInline';
import Input from '@quoine/components/InputInline';
import TextBox from '@quoine/components/TextBox';
import TFARequest from '@quoine/components/TFARequest';

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
          <Input id="code" label={translate('tfa-manage:toggle-label')}>
            <TextBox value={props.value} onChange={props.onChange} autoFocus />
          </Input>
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
