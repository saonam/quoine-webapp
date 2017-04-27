import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@quoine/components/Icon';
import Button from '@quoine/components/Button';
import TextInput from '@quoine/components/TextInput';

import styles from './styles.css';

const NumberInputView = (props) => {
  const styleName = `${props.focus ? 'accent' : 'primary-2'}`;
  return (
    <div className={`${styles.main} ${props.border ? styles.border : ''}`}>
      <Button
        styleName={styleName} onClick={props.onMinus} className={styles.minus}
      >
        <Icon glyph="minus" />
      </Button>
      <TextInput
        type="number" onFocus={props.onFocus} onBlur={props.onBlur}
        value={props.value} onChange={props.onChange}
      />
      <Button
        styleName={styleName} onClick={props.onPlus} className={styles.plus}
      >
        <Icon glyph="plus" />
      </Button>
    </div>
  );
};

NumberInputView.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
  focus: PropTypes.bool,
  border: PropTypes.bool,
};

export default NumberInputView;
