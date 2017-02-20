import React from 'react';

import Icon from '@quoine/components/Icon';
import Button from '@quoine/components/Button';
import TextBox from '@quoine/components/TextBox';

import styles from './styles.css';

const TextBoxNumberView = (props) => {
  const styleName = `${props.focus ? 'accent' : 'primary-2'}`;
  return (
    <div className={styles.main}>
      <Button
        styleName={styleName} onClick={props.onMinus} className={styles.minus}
      >
        <Icon glyph="minus" />
      </Button>
      <TextBox
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

TextBoxNumberView.propTypes = {
  focus: React.PropTypes.bool.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onFocus: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  onMinus: React.PropTypes.func.isRequired,
  onPlus: React.PropTypes.func.isRequired,
};

export default TextBoxNumberView;
