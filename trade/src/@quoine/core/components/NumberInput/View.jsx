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
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onFocus: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  onMinus: React.PropTypes.func.isRequired,
  onPlus: React.PropTypes.func.isRequired,
  focus: React.PropTypes.bool,
  border: React.PropTypes.bool,
};

export default NumberInputView;
