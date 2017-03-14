import React from 'react';

import TextBox from '@quoine/components/TextBox';

import styles from './styles.css';

const JpAddressBox = ({ value, onChange }) => (
  <div className={styles.main}>
    <div className={styles.row}>
      <div className={styles.input}>
        <TextBox
          value={value.zip}
          onChange={onChange.zip}
          placeholder="郵便番号"
          pattern="[0-9]{7}"
          title="7つの数字"
        />
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.input}>
        <TextBox
          value={value.prefecture}
          onChange={onChange.prefecture}
          placeholder="都道府県"
        />
      </div>
      <div className={styles.input}>
        <TextBox
          value={value.municipality}
          onChange={onChange.municipality}
          placeholder="市区町村"
        />
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.input}>
        <TextBox
          value={value.street}
          onChange={onChange.street}
          placeholder="番地"
        />
      </div>
      <div className={styles.input}>
        <TextBox
          value={value.building}
          onChange={onChange.building}
          placeholder="マンション名"
        />
      </div>
    </div>
  </div>
);

JpAddressBox.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

export default JpAddressBox;
