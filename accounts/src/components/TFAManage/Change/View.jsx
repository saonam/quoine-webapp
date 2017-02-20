import React from 'react';

import translate from '@quoine/translate';

import FormInline from '@quoine/components/FormInline';
import Input from '@quoine/components/InputInline';
import TextBox from '@quoine/components/TextBox';

import styles from './styles.css';

const TFAManageChangeView = (props) => (
  <FormInline
    description={translate('tfa-manage:change-description')}
    // ===
    onSubmit={props.onSubmit}
    submitLabel={translate('tfa-manage:change-action')}
    onCancel={props.onCancel}
    // ===
    busy={props.busy}
  >
    <div className={styles.input}>
      <Input id="phone" label={translate('tfa-manage:change-label')}>
        <TextBox value={props.value} onChange={props.onChange} autoFocus />
      </Input>
    </div>
  </FormInline>
);

TFAManageChangeView.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default TFAManageChangeView;
