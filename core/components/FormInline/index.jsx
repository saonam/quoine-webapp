import PropTypes from 'prop-types';
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
        {props.onCancel ? (
          <div className={styles.item}>
            <Button styleName="primary-3 inline text" onClick={props.onCancel}>
              {props.cancelLabel || translate('form:cancel')}
            </Button>
          </div>
        ) : null}
      </form>
      <p className={styles[props.error ? 'error' : 'description']}>
        {props.error || props.description}
      </p>
    </div>
  );
};

FormInline.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,

  error: PropTypes.string,
  busy: PropTypes.bool.isRequired,
  success: PropTypes.string,
  doneLabel: PropTypes.string,

  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
  onCancel: PropTypes.func,
  cancelLabel: PropTypes.string,
};

export default FormInline;
