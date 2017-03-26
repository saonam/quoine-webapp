import React from 'react';

import TextInput from '@quoine/components/TextInput';

import styles from './styles.css';

const JpAddressInputView = ({ value, onChange, required, border }) => (
  <div className={styles.main}>
    <div className={styles.row}>
      <div className={styles.input}>
        <TextInput
          value={value.zip}
          onChange={onChange.zip}
          placeholder="郵便番号"
          pattern="[0-9]{7}"
          title="7つの数字"
          required={required}
          border={border}
        />
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.input}>
        <TextInput
          value={value.prefecture}
          onChange={onChange.prefecture}
          placeholder="都道府県"
          required={required}
          border={border}
        />
      </div>
      <div className={styles.input}>
        <TextInput
          value={value.municipality}
          onChange={onChange.municipality}
          placeholder="市区町村"
          required={required}
          border={border}
        />
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.input}>
        <TextInput
          value={value.street}
          onChange={onChange.street}
          placeholder="番地"
          required={required}
          border={border}
        />
      </div>
      <div className={styles.input}>
        <TextInput
          value={value.building}
          onChange={onChange.building}
          placeholder="マンション名"
          border={border}
        />
      </div>
    </div>
  </div>
);

JpAddressInputView.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
  required: React.PropTypes.bool,
  border: React.PropTypes.bool,
};

export default JpAddressInputView;
