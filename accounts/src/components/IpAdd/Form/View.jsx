import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import ButtonWLoading from '@quoine/components/ButtonWLoading';
import ErrorMessage from '@quoine/components/ErrorMessage';
import Inputs from 'components/IpAdd/Inputs';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from './styles.css';

const IpAddFormView = (props) => (
  <form className={styles.main} onSubmit={props.onSubmit}>
    <p className={styles.message}>{translate('ip:add-main-description1')}</p>
    <p className={styles.message}>{translate('ip:add-main-description2')}</p>
    <p className={`${styles.message} ${styles.strong}`}>{translate('ip:add-description')}</p>

    <Inputs form={props.form} onChange={props.onChange} />

    <ErrorMessage error={props.error} />

    {!props.success && (
      <div className={styles.buttons}>
        <span className={styles.button}>
          <ButtonWLoading
            styleName="accent-bg inline text"
            type="submit" busy={props.busy}
          >
            {translate('ip:add-action-submit')}
          </ButtonWLoading>
        </span>
        <span className={styles.button}>
          <Button
            styleName="primary-4-bg inline text"
            onClick={props.onCancel}
          >
            {translate('ip:add-action-cancel')}
          </Button>
        </span>
      </div>
    )}
  </form>
);

IpAddFormView.propTypes = {
  ...FormWrapperPropTypes,
  ...ErrorMessage.propTypes,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default IpAddFormView;
