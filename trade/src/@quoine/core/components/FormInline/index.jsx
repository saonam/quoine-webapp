import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import ButtonWLoading from '@quoine/components/ButtonWLoading';

import styles from './styles.css';

const FormInline = (props) => {
  if (props.success) {
    return (
      <div className={styles.form}>
        <p className={styles.item}>{props.success}</p>
        <div className={styles.item}>
          <Button onClick={props.onCancel} autoFocus>
            {props.doneLabel || translate('form:done')}
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <form className={styles.form} onSubmit={props.onSubmit}>
        {React.Children.map(props.children, (child) => (
          <div className={styles.item}>
            {child}
          </div>
        ))}
        <div className={styles.item}>
          <ButtonWLoading type="submit" busy={props.busy}>
            {props.submitLabel}
          </ButtonWLoading>
        </div>
        <div className={styles.item}>
          <Button styleName="primary-3 inline text" onClick={props.onCancel}>
            {props.cancelLabel || translate('form:cancel')}
          </Button>
        </div>
      </form>
      <p className={styles[props.error ? 'error' : 'description']}>
        {props.error || props.description}
      </p>
    </div>
  );
};

FormInline.propTypes = {
  children: React.PropTypes.node.isRequired,
  description: React.PropTypes.string,

  error: React.PropTypes.string,
  busy: React.PropTypes.bool.isRequired,
  success: React.PropTypes.string,
  doneLabel: React.PropTypes.string,

  onSubmit: React.PropTypes.func.isRequired,
  submitLabel: React.PropTypes.string,
  onCancel: React.PropTypes.func.isRequired,
  cancelLabel: React.PropTypes.string,
};

export default FormInline;
