import React from 'react';

import Toggler from '@quoine/components/Toggler';
import FloatBox from '@quoine/components/FloatBox';

import styles from './styles.css';

const stop = (e) => {
  e.stopPropagation();
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
  activity: React.PropTypes.shape({}),
  error: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  // ===
  modelName: React.PropTypes.string.isRequired,
  target: React.PropTypes.string.isRequired,
  layout: React.PropTypes.string.isRequired,
  Element: React.PropTypes.func,
  // ===
  Standby: React.PropTypes.func.isRequired,
  Confirm: React.PropTypes.func.isRequired,
  Err: React.PropTypes.func.isRequired,
  Form: React.PropTypes.func.isRequired,
  // ===
  color: React.PropTypes.string,
  right: React.PropTypes.bool,
};

export default BltItemEdit;
