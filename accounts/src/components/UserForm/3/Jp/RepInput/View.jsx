/* eslint-disable max-len */

import React from 'react';

import TextInput from '@quoine/components/TextInput';
import CheckboxInput from '@quoine/components/CheckboxInput';
import Link from '@quoine/components/Link';

import LargeField from 'components/LargeField';
import styles from 'components/UserForm/styles.css';

import KanaNameInput from '../KanaNameInput';
import KanjiNameInput from '../KanjiNameInput';

const JpRepInputView = ({ value, onChange, required, ...others }) => (
  <div className={styles.main}>

    <div className={styles.input}>
      <LargeField label="代表者(役職名)">
        <TextInput
          value={value.title}
          onChange={onChange.title}
          required={required}
          {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="代表者氏名">
        <KanjiNameInput
          value={value.nameKanji}
          onChange={onChange.nameKanji}
          required={required}
          {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="代表者氏名(フリガナ)">
        <KanaNameInput
          value={value.nameKana}
          onChange={onChange.nameKana}
          required={required}
          {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="米国納税義務">
        <CheckboxInput
          id="rep-us" value={value.us}
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
          id="jp" value={value.jp}
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
          id="pep" value={value.pep}
          onChange={onChange.pep}
          required={required}
        >
          私は外国の重要な公人、もしくはその親族ではありません。
        </CheckboxInput>
      </LargeField>
      <p className={styles.help}>
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
          外国PEPsについて
        </Link>
      </p>
    </div>

  </div>
);

JpRepInputView.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
  required: React.PropTypes.bool,
};

export default JpRepInputView;
