import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Checkbox from '@quoine/components/Checkbox';
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
          <Checkbox id="all" value={all} onChange={onAllChange}>
            {translate('sign-out:all')}
          </Checkbox>
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
  onSubmit: React.PropTypes.func.isRequired,
  all: React.PropTypes.bool.isRequired,
  onAllChange: React.PropTypes.func.isRequired,
  error: React.PropTypes.string.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default SignOutView;
