import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';
import FileInput from '@quoine/components/FileInput';

import Row from 'components/SettingsRow';

import styles from './styles.css';

const translateLabel = (user, key) => (
  user.isQuoineJapan ? '' : translate(key)
);

const ProfileForm = ({
  error, user, form, onChange, busy, disabled, onSubmit,
}) => (
  <div>
    <Row label={translateLabel(user, 'user:document-id')}>
      <FileInput
        id="document-id" value={form.id} onChange={onChange.id}
      />
    </Row>
    <Row label={translateLabel(user, 'user:document-address')}>
      <FileInput
        id="document-address" value={form.address} onChange={onChange.address}
      />
    </Row>
    <Row label={translateLabel(user, 'user:document-bank')}>
      <FileInput
        id="document-bank" value={form.bank} onChange={onChange.bank}
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
  disabled: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  busy: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.objectOf(
    React.PropTypes.func.isRequired,
  ).isRequired,
  form: React.PropTypes.shape({}).isRequired,
  user: React.PropTypes.shape({}),
};

export default ProfileForm;
