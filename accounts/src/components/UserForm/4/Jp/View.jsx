import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';
import ErrorMessage from '@quoine/components/ErrorMessage';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/UserForm/styles.css';

import Term from './Term';
import Review from './Review';

const UserForm4Jp = ({ onSubmit, originalForm, edit, form, onChange, busy, parentError }) => (
  <form onSubmit={onSubmit}>

    <h1 className={styles.heading}>入力内容確認</h1>

    <div className={styles.body}>
      <Review form={originalForm} />
    </div>

    {edit ? null : (
      <div>
        <h1 className={styles.heading}>利用規約</h1>
        <div className={styles.body}>
          <Term form={form} onChange={onChange} />
        </div>
      </div>
    )}

    <ErrorMessage className={styles.error} error={parentError} />

    <div className={styles.input}>
      <Button busy={busy} type="submit" styleName="modal accent">
        {translate(`${edit ? 'edit-user:action-submit' : 'sign-up:action-next'}`)}
      </Button>
    </div>

  </form>
);

UserForm4Jp.propTypes = {
  originalForm: PropTypes.shape({}).isRequired,
  edit: PropTypes.bool,
  parentError: ErrorMessage.propTypes.error,
  // ===
  ...FormWrapperPropTypes,
};

export default UserForm4Jp;
