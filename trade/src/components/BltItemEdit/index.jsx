import PropTypes from 'prop-types';
import React from 'react';

import Toggler from '@quoine/components/Toggler';
import FloatBox from '@quoine/components/FloatBox';

import styles from './styles.css';

const stop = (event) => {
  event.stopPropagation();
};

const BltItemEdit = (props) => {
  const model = props[props.modelName];

  const { activity, target, error } = props;
  const confirming = (
    activity &&
    activity.id === model.id &&
    activity.target === target
  );
  const message = (
    error.id === model.id &&
    error.target === target
  ) ? error.message : false;

  const style = {
    right: props.right ? 0 : '-100%',
  };

  const {
    Standby, Form, Confirm, Err, Element, layout, color,
  } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span className={styles.main} onClick={stop}>
      {confirming && layout === 'horizontal' ? (
        <div className={styles.box} style={style}>
          <FloatBox color={color}><Confirm /></FloatBox>
        </div>
      ) : null}
      {message && layout === 'horizontal' ? (
        <div className={styles.box} style={style}>
          <FloatBox color="negative">
            <Err message={message} />
          </FloatBox>
        </div>
      ) : null}
      <Toggler
        Standby={Standby} Active={Form}
        target={target} Element={Element}
        confirming={confirming}
        {...{ [props.modelName]: model }}
      />
    </span>
  );
};

BltItemEdit.propTypes = {
  activity: PropTypes.shape({}),
  error: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  // ===
  modelName: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  Element: PropTypes.func,
  // ===
  Standby: PropTypes.func.isRequired,
  Confirm: PropTypes.func.isRequired,
  Err: PropTypes.func.isRequired,
  Form: PropTypes.func.isRequired,
  // ===
  color: PropTypes.string,
  right: PropTypes.bool,
};

export default BltItemEdit;
