import PropTypes from 'prop-types';
import React from 'react';

import TextInput from '@quoine/components/TextInput';
import RadiosInput from '@quoine/components/RadiosInput';
import PhoneInput from '@quoine/components/PhoneInput';
import DateInput from '@quoine/components/DateInput';

import LargeField from 'components/LargeField';
import styles from 'components/UserForm/styles.css';

import GenderInput from '../GenderInput';
import AddressInput from '../AddressInput';
import KanaNameInput from '../KanaNameInput';
import KanjiNameInput from '../KanjiNameInput';

const options = [
  { value: 'yes', label: 'はい' },
  { value: 'no', label: 'いいえ' },
];

const JpTraderForm = ({ value, onChange, required, ...others }) => (
  <div className={styles.main}>

    <div className={styles.input}>
      <LargeField label="代表者と担当者は同一ですか">
        <RadiosInput
          id="same-as-rep"
          value={value.sameAsRep}
          onChange={onChange.sameAsRep}
          options={options}
          required={required}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="担当者役職名">
        <TextInput
          value={value.position} onChange={onChange.position}
          required={required} {...others}
        />
      </LargeField>
      <p className={styles.help}>
        ※役職がない場合、「なし」と入力してください。
      </p>
    </div>

    <div className={styles.input}>
      <LargeField label="担当者所属部署">
        <TextInput
          value={value.department} onChange={onChange.department}
          required={required} {...others}
        />
      </LargeField>
      <p className={styles.help}>
        ※所属部署がない場合、「なし」と入力してください。
      </p>
    </div>

    {value.sameAsRep === 'no' ? (
      <div className={styles.input}>
        <LargeField label="担当者氏名">
          <KanjiNameInput
            value={value.nameKanji} onChange={onChange.nameKanji}
            required={required} {...others}
          />
        </LargeField>
      </div>
    ) : null}

    {value.sameAsRep === 'no' ? (
      <div className={styles.input}>
        <LargeField label="担当者氏名(フリガナ)">
          <KanaNameInput
            value={value.nameKana} onChange={onChange.nameKana}
            required={required} {...others}
          />
        </LargeField>
      </div>
    ) : null}

    <div className={styles.input}>
      <LargeField label="生年月日">
        <DateInput
          value={value.birth} onChange={onChange.birth}
          required={required} {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <div className={styles.input}>
        <LargeField label="性別">
          <GenderInput
            value={value.gender} onChange={onChange.gender}
            required={required} {...others}
          />
        </LargeField>
      </div>
    </div>

    <div className={styles.input}>
      <LargeField label="ご住所">
        <AddressInput
          value={value.address} onChange={onChange.address}
          required={required} {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="担当者電話番号">
        <PhoneInput
          value={value.phone} onChange={onChange.phone}
          required={required} {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="担当者メールアドレス">
        <TextInput
          type="email" value={value.email} onChange={onChange.email}
          required={required} {...others}
        />
      </LargeField>
    </div>

  </div>
);

JpTraderForm.propTypes = {
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.shape({}).isRequired,
  required: PropTypes.bool,
};

/*
  <div className={styles.input}>
    <LargeField label="担当者メールアドレス（確認用）">
      <TextInput type="email" value={value.email2} onChange={onChange.email2} required={required} />
    </LargeField>
  </div>
*/

export default JpTraderForm;
