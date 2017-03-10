import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';

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
    {props.error ? (
      <div className={styles.error}>
        {translate(props.error.message)}
      </div>
    ) : null}
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
  action: React.PropTypes.oneOf(['add', 'edit']).isRequired,
  busy: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onDismiss: React.PropTypes.func.isRequired,
  success: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
};

export default WdrBankFormView;