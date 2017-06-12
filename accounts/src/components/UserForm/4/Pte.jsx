import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import CheckboxInput from '@quoine/components/CheckboxInput';
import Button from '@quoine/components/ButtonWLoading';
import ErrorMessage from '@quoine/components/ErrorMessage';
import LargeField from 'components/LargeField';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/UserForm/styles.css';

const UserForm4 = ({ onSubmit, form, onChange, busy, error, captcha, onRef }) => (
  <form onSubmit={onSubmit}>

    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label={translate('sign-up:referral')}>
          <TextInput
            value={form.referral} onChange={onChange.referral}
            autoFocus border
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <CheckboxInput id="term" value={form.term} onChange={onChange.term} required>
          <span
            className={styles.term}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate(`sign-up:term-${
                process.env.REACT_APP_VENDOR
              }`),
            }}
          />
        </CheckboxInput>
      </div>

      <div className={styles.input}>
        <div ref={onRef} />
      </div>

    </div>

    <ErrorMessage className={styles.error} error={error} />

    <div className={styles.input}>
      <Button
        busy={busy}
        type="submit"
        disabled={!captcha}
        styleName={`modal accent ${!captcha ? 'disabled' : ''}`}
      >
        {translate('sign-up:action-next')}
      </Button>
    </div>

  </form>
);

UserForm4.propTypes = {
  ...FormWrapperPropTypes,
  // ===
  captcha: PropTypes.string.isRequired,
  onRef: PropTypes.func.isRequired,
};

export default UserForm4;
