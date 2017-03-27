import React from 'react';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const FormNumberInPlaceView = ({ value, onChange, onSubmit, onCancel }) => (
  <form className={styles.main} onSubmit={onSubmit}>
    <input
      className={styles.input} type="number" autoFocus
      value={value} onChange={onChange}
    />
    <Button styleName="icon accent" type="submit">
      <Icon glyph="check" />
    </Button>
    <Button styleName="icon primary-3" onClick={onCancel}>
      <Icon glyph="cancel" />
    </Button>
  </form>
);

FormNumberInPlaceView.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
};

export default FormNumberInPlaceView;
