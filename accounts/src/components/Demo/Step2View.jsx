import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import ButtonWLoading from '@quoine/components/ButtonWLoading';

import LargeField from 'components/LargeField';

import styles from './styles.css';

const Step2View = ({
  mode, busy, error, email, onEmailChange, onSubmit, isFromPrev,
}) => (
  <form onSubmit={onSubmit} className={styles.main}>
    <div className={styles.body}>
      <p className={styles.description}>
        {mode === 'new' ? (
          translate('demo:new-description')
        ) : (
          translate('demo:continue-description')
        )}
        {mode === 'continue' && isFromPrev ? (
          ` ${translate('demo:continue-found')}`
        ) : null}
      </p>
      <div className={styles.email}>
        <LargeField label={translate('demo:email')}>
          <TextInput type="email" value={email} onChange={onEmailChange} />
        </LargeField>
      </div>
      <p className={styles.error}>{translate(error)}</p>
    </div>
    <div className={styles.submit}>
      <ButtonWLoading type="submit" busy={busy} styleName="modal accent">
        {translate('demo:action')}
      </ButtonWLoading>
    </div>
  </form>
);

Step2View.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  busy: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  isFromPrev: PropTypes.bool.isRequired,
};

export default Step2View;
