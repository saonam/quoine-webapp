import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';
import ErrorMessage from '@quoine/components/ErrorMessage';
import TextInput from '@quoine/components/TextInput';
import Field from '@quoine/components/Field';

import styles from './styles.css';

const WdrAddressVerifyView = (props) => (
  props.success ? (
    <div className={styles.main}>
      <div className={styles.success}>
        {translate('wdr-address:confirm-success')}
      </div>
      <div className={styles.item}>
        <Button
          styleName="text primary-3-bg full large"
          onClick={props.onDismiss}
        >
          {translate('wdr-address:add-dismiss')}
        </Button>
      </div>
    </div>
  ) : (
    <form onSubmit={props.onSubmit} className={styles.main}>

      <p className={styles.description}>
        {translate('wdr-address:confirmation-token-description')}
      </p>

      <div className={styles.body}>
        <Field
          label={<h1 className={styles.label}>{translate('wdr-address:confirmation-token-input')}</h1>}
        >
          <div className={styles.children}>
            <TextInput value={props.form.token} onChange={props.onChange.token} border required />
          </div>
        </Field>
      </div>

      <ErrorMessage className={styles.error} error={props.error} />

      <div className={styles.item}>
        <ButtonWLoading
          busy={props.busy}
          type="submit"
          styleName="text accent-bg full large"
        >
          {translate('wdr-address:confirm-submit')}
        </ButtonWLoading>
      </div>

      <div className={styles.item}>
        <Button
          styleName="text primary-3-bg full large"
          onClick={props.onDismiss}
        >
          {translate('wdr-address:confirm-dismiss')}
        </Button>
      </div>

    </form>
  )
);

WdrAddressVerifyView.propTypes = {
  ...ErrorMessage.PropTypes,
  busy: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
  ]).isRequired,
  success: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
  ]).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrAddressVerifyView;
