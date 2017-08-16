import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';
import ErrorMessage from '@quoine/components/ErrorMessage';
import TextInput from '@quoine/components/TextInput';
import Field from '@quoine/components/Field';
import TFARequest from '@quoine/components/TFARequest';

import styles from './styles.css';

const WdrAddressFormView = (props) => (
  <form onSubmit={props.onSubmit} className={styles.main}>
    <div className={styles.body}>
      <Field
        label={<h1 className={styles.label}>{translate('wdr-address:address')}</h1>}
      >
        <div className={styles.children}>
          <TextInput
            value={props.form.address}
            onChange={props.onChange.address}
            border required
          />
        </div>
      </Field>
      <Field
        label={<h1 className={styles.label}>{translate('wdr-address:auth-code')}</h1>}
      >
        <div className={styles.children}>
          <TextInput
            value={props.form.authCode}
            onChange={props.onChange.authCode}
            border required
          />
        </div>
      </Field>
      <TFARequest skipFirst useEmail />
    </div>
    {props.success ? (
      <div className={styles.success}>
        {translate(`wdr-address:${props.action}-success`)}
      </div>
    ) : null}
    <ErrorMessage className={styles.error} error={props.error} />

    {props.success ? null : (
      <div className={styles.item}>
        <ButtonWLoading
          busy={props.busy}
          type="submit"
          styleName="text accent-bg full large"
        >
          {translate(`wdr-address:${props.action}-submit`)}
        </ButtonWLoading>
      </div>
    )}

    <div className={styles.item}>
      <Button
        styleName="text primary-4-bg full large"
        onClick={props.onDismiss}
      >
        {translate(`wdr-address:${props.action}-dismiss`)}
      </Button>
    </div>
  </form>
);

WdrAddressFormView.propTypes = {
  ...ErrorMessage.PropTypes,
  action: PropTypes.oneOf(['add', 'edit']).isRequired,
  busy: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  success: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
  ]).isRequired,
};

export default WdrAddressFormView;
