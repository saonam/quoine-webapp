import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import CheckboxInput from '@quoine/components/CheckboxInput';
import Button from '@quoine/components/ButtonWLoading';

import LargeField from 'components/LargeField';
import Err from 'components/UserForm/Err';

import styles from 'components/UserForm/styles.css';

const UserForm4 = ({ onSubmit, form, onChange, busy, error }) => (
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

    </div>

    <Err error={error} />

    <div className={styles.input}>
      <Button busy={busy} type="submit" styleName="modal accent">
        {translate('sign-up:action-next')}
      </Button>
    </div>

  </form>
);

UserForm4.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  onSubmit: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
  ...Err.propTypes,
};

export default UserForm4;
