import React from 'react';

import Modal from '@quoine/components/Modal';
import ButtonWLoading from '@quoine/components/ButtonWLoading';
import ErrorMessage from '@quoine/components/ErrorMessage';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import List from './List';

import styles from './styles.css';

const TermView = ({ form, onChange, busy, error, onSubmit }) => (
  <Modal
    isOpen isNoOverlay
    contentLabel="お客様交付書面改正のお知らせと同意のお願い。"
    title="お客様交付書面改正のお知らせと同意のお願い。"
  >
    <form onSubmit={onSubmit}>
      <div className={styles.body}>
        <List form={form} onChange={onChange} newOnly />

        <ErrorMessage className={styles.error} error={error} />
      </div>

      <ButtonWLoading
        styleName="modal accent"
        type="submit" busy={busy}
      >
        次
      </ButtonWLoading>
    </form>
  </Modal>
);

TermView.propTypes = {
  ...FormWrapperPropTypes,
};

export default TermView;
