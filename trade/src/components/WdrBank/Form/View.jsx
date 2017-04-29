import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';
import ErrorMessage from '@quoine/components/ErrorMessage';

import Body from './Body';
import styles from './styles.css';

const WdrBankFormView = (props) => (
  <form onSubmit={props.onSubmit} className={styles.main}>
    <div className={styles.body}>
      <Body form={props.form} onChange={props.onChange} />
    </div>
    {props.success ? (
      <div className={styles.success}>
        {translate(`bank:${props.action}-success`)}
      </div>
    ) : null}

    <ErrorMessage className={styles.error} error={props.error} />

    <div className={styles.item}>
      <ButtonWLoading
        busy={props.busy}
        type="submit"
        styleName="text accent-bg full large"
      >
        {translate(`bank:${props.action}-submit`)}
      </ButtonWLoading>
    </div>
    <div className={styles.item}>
      <Button
        styleName="text primary-3-bg full large"
        onClick={props.onDismiss}
      >
        {translate(`bank:${props.action}-dismiss`)}
      </Button>
    </div>
  </form>
);

WdrBankFormView.propTypes = {
  ...Body.PropTypes,
  ...ErrorMessage.PropTypes,
  action: PropTypes.oneOf(['add', 'edit']).isRequired,
  busy: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  success: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
};

export default WdrBankFormView;
