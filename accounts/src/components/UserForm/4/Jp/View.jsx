import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';
import ErrorMessage from '@quoine/components/ErrorMessage';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/UserForm/styles.css';

import TermList from '@quoine/components/Term/List';
import Review from './Review';

const UserForm4Jp = ({
  onSubmit, originalForm, edit, form, changed,
  onChange, busy, parentError,
  captcha, onRef,
}) => {
  const disableSubmit = (edit && !changed) || !captcha;
  return (
    <form onSubmit={onSubmit}>
      {changed ? null : (
        <div className={styles.body}>
          <p className={styles.description}>
            {translate('edit-user:message-no-changes')}
          </p>
        </div>
      )}

      <h1 className={styles.heading}>入力内容確認</h1>

      <div className={styles.body}>
        <Review form={originalForm} />
      </div>

      {edit ? null : (
        <div>
          <h1 className={styles.heading}>利用規約</h1>
          <div className={styles.body}>
            <TermList form={form} onChange={onChange} />
          </div>
        </div>
      )}

      <div className={styles.body}>
        <div ref={onRef} />
      </div>

      <ErrorMessage className={styles.error} error={parentError} />

      <div className={styles.input}>
        <Button
          busy={busy}
          type="submit"
          disabled={disableSubmit}
          styleName="modal accent disabled-primary-2"
        >
          {translate(`${edit ? 'edit-user:action-submit' : 'sign-up:action-next'}`)}
        </Button>
      </div>

    </form>
  );
};

UserForm4Jp.propTypes = {
  originalForm: PropTypes.shape({}).isRequired,
  edit: PropTypes.bool,
  parentError: ErrorMessage.propTypes.error,
  changed: PropTypes.bool,
  // ===
  captcha: PropTypes.string.isRequired,
  onRef: PropTypes.func.isRequired,
  // ===
  ...FormWrapperPropTypes,
};

export default UserForm4Jp;
