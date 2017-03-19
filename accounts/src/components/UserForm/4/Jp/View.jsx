import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

import styles from 'components/UserForm/styles.css';

import Term from './Term';
import Review from './Review';

const UserForm4Jp = ({ onSubmit, originalForm, edit, form, onChange, busy }) => (
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

    <div className={styles.input}>
      <Button busy={busy} type="submit" styleName="modal accent">
        {translate(`${edit ? 'edit-user:action-submit' : 'sign-up:action-next'}`)}
      </Button>
    </div>

  </form>
);

UserForm4Jp.propTypes = {
  originalForm: React.PropTypes.shape({}).isRequired,
  edit: React.PropTypes.bool,
  // ===
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default UserForm4Jp;
