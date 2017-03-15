import React from 'react';

import TextBox from '@quoine/components/TextBox';
import Input from '@quoine/components/Input';
import Radios from '@quoine/components/Radios';
import PhoneInput from '@quoine/components/PhoneInput';

import styles from 'components/SignUp/Form/styles.css';

import GenderSelect from '../GenderSelect';
import AddressSelect from '../AddressSelect';
import KanaNameInput from '../KanaNameInput';
import KanjiNameInput from '../KanjiNameInput';

const JpTraderForm = ({ value, onChange }) => (
  <div className={styles.main}>

    <div className={styles.input}>
      <Input large label="代表者と担当者は同一ですか" noBorder>
        <Radios
          id="same-as-rep"
          value={value.sameAsRep}
          onChange={onChange.sameAsRep}
          options={[
            { value: 'yes', label: 'はい' },
            { value: 'no', label: 'いいえ' },
          ]}
        />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="担当者役職名">
        <TextBox value={value.position} onChange={onChange.position} required />
      </Input>
      <p className={styles.help}>
        ※役職がない場合、「なし」と入力してください。
      </p>
    </div>

    <div className={styles.input}>
      <Input large label="担当者所属部署">
        <TextBox value={value.department} onChange={onChange.department} required />
      </Input>
      <p className={styles.help}>
        ※所属部署がない場合、「なし」と入力してください。
      </p>
    </div>

    {value.sameAsRep === 'no' ? (
      <div className={styles.input}>
        <Input large label="担当者氏名">
          <KanjiNameInput value={value.nameKanji} onChange={onChange.nameKanji} required />
        </Input>
      </div>
    ) : null}

    {value.sameAsRep === 'no' ? (
      <div className={styles.input}>
        <Input large label="担当者氏名(フリガナ)">
          <KanaNameInput value={value.nameKana} onChange={onChange.nameKana} required />
        </Input>
      </div>
    ) : null}

    <div className={styles.input}>
      <div className={styles.input}>
        <Input large label="性別" noBorder>
          <GenderSelect value={value.gender} onChange={onChange.gender} />
        </Input>
      </div>
    </div>

    <div className={styles.input}>
      <Input large label="ご住所">
        <AddressSelect value={value.address} onChange={onChange.address} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="担当者電話番号">
        <PhoneInput value={value.phone} onChange={onChange.phone} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="担当者メールアドレス">
        <TextBox type="email" value={value.email} onChange={onChange.email} required />
      </Input>
    </div>

  </div>
);

JpTraderForm.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

/*
  <div className={styles.input}>
    <Input large label="担当者メールアドレス（確認用）">
      <TextBox type="email" value={value.email2} onChange={onChange.email2} required />
    </Input>
  </div>
*/

export default JpTraderForm;
