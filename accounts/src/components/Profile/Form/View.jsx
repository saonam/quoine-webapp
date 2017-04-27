import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';
import FileInput from '@quoine/components/FileInput';

import Row from 'components/SettingsRow';

import styles from './styles.css';

const translateLabel = (user, key) => (
  user.underJFSA ? '' : translate(key)
);

const ProfileForm = ({
  error, user, form, onChange, busy, disabled, onSubmit,
}) => (
  <div>

    <Row label={translateLabel(user, 'user:document-id')}>
      <FileInput
        value={form.id}
        onChange={onChange.id}
        id="document-id"
      />
    </Row>

    <Row label={translateLabel(user, 'user:document-address')}>
      <FileInput
        value={form.address}
        onChange={onChange.address}
        id="document-address"
      />
    </Row>

    <Row label={translateLabel(user, 'user:document-bank')}>
      <FileInput
        value={form.bank}
        onChange={onChange.bank}
        id="document-bank"
      />
    </Row>

    {error ? (
      <Row>
        <p className={styles.error}>
          {translate(error)}
        </p>
      </Row>
    ) : null}

    <Row>
      <Button
        styleName="accent text inline disabled-primary-2"
        disabled={disabled} busy={busy} onClick={onSubmit}
      >
        {translate('user:document-action')}
      </Button>
    </Row>

  </div>
);

ProfileForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  busy: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.objectOf(
    PropTypes.func.isRequired,
  ).isRequired,
  form: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}),
};

export default ProfileForm;
