import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import CheckboxInput from '@quoine/components/CheckboxInput';
import ButtonWLoading from '@quoine/components/ButtonWLoading';

import styles from './styles.css';

// TODO: should be radio instead of checkbox

const SignOutView = ({ onSubmit, all, onAllChange, error, busy }) => (
  <Modal
    isOpen isNoOverlay contentLabel="sign out modal"
    title={translate('sign-out:title')}
  >
    <form onSubmit={onSubmit} className={styles.main}>
      <div className={styles.body}>
        <p
          className={styles.description}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: translate('sign-out:description'),
          }}
        />
        <div className={styles.input}>
          <CheckboxInput id="all" value={all} onChange={onAllChange}>
            {translate('sign-out:all')}
          </CheckboxInput>
        </div>
        <p className={styles.error}>
          {translate(error)}
        </p>
      </div>
      <div className={styles.submit}>
        <ButtonWLoading type="submit" busy={busy} styleName="modal accent">
          {translate('sign-out:action')}
        </ButtonWLoading>
      </div>
    </form>
  </Modal>
);

SignOutView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  all: PropTypes.bool.isRequired,
  onAllChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  busy: PropTypes.bool.isRequired,
};

export default SignOutView;
