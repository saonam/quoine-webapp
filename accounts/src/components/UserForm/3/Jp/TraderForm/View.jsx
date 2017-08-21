import PropTypes from 'prop-types';
import React from 'react';

import TextInput from '@quoine/components/TextInput';
import RadiosInput from '@quoine/components/RadiosInput';
import PhoneInput from '@quoine/components/PhoneInput';
import DateInput from '@quoine/components/DateInput';
import CheckboxInput from '@quoine/components/CheckboxInput';
import Link from '@quoine/components/Link';

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

    {(value.sameAsRep === 'no') && (
      <div>
        <div className={styles.input}>
          <LargeField label="米国納税義務">
            <CheckboxInput
              id="trader-us" value={value.us}
              onChange={onChange.us}
              required={required}
            >
              私は、米国納税義務が無いことを確約します。
            </CheckboxInput>
          </LargeField>
          <p className={styles.help}>
            「米国籍」または「米国居住者（米国永住権をお持ちの方、米国での滞在日数が183日以上の方）」に該当するお客様は「あり」をご選択ください。
          </p>
          <p className={styles.help}>
            ※米国納税義務があるお客様は法人口座の開設はできません。
          </p>
        </div>

        <div className={styles.input}>
          <LargeField label="居住地国">
            <CheckboxInput
              id="trader-jp" value={value.jp}
              onChange={onChange.jp}
              required={required}
            >
              <p style={{ lineHeight: '24px' }}>
                私は、日本以外に居住地国が無いことを確約します。また、居住地国に変更があった場合は、変更があった日から3ヶ月を経過する日までに異動届出書により申告します。
              </p>
            </CheckboxInput>
          </LargeField>
          <p className={styles.help}>
            ※日本以外に居住地国をお持ちのお客様は法人口座の開設はできません。
          </p>
        </div>

        <div className={styles.input}>
          <LargeField label="外国PEPs">
            <CheckboxInput
              id="trader-pep" value={value.pep}
              onChange={onChange.pep}
              required={required}
            >
              <p style={{ lineHeight: '24px' }}>
                私は外国の重要な公人、もしくはその親族ではありません。
              </p>
            </CheckboxInput>
          </LargeField>
          <p className={styles.help}>
            <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
              外国PEPsについて
            </Link>
          </p>
        </div>
      </div>
    )}

    <div className={styles.input}>
      <LargeField label="ご住所">
        <AddressInput
          value={value.address} onChange={onChange.address}
          required={required} {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="担当者携帯番号">
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
