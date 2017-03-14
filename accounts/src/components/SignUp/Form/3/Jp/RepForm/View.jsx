/* eslint-disable max-len */

import React from 'react';

import TextBox from '@quoine/components/TextBox';
import Input from '@quoine/components/Input';
import NameInput from '@quoine/components/NameInput';
import Checkbox from '@quoine/components/Checkbox';

import Link from '@quoine/components/Link';

import styles from 'components/SignUp/Form/styles.css';

import KanaNameInput from '../KanaNameInput';

const JpRepForm = ({ value, onChange }) => (
  <div className={styles.main}>

    <div className={styles.input}>
      <Input large label="代表者(役職名)">
        <TextBox value={value.title} onChange={onChange.title} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="代表者氏名">
        <NameInput value={value.nameKanji} onChange={onChange.nameKanji} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="代表者氏名(フリガナ)">
        <KanaNameInput value={value.nameKana} onChange={onChange.nameKana} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="米国納税義務" noBorder>
        <Checkbox id="rep-us" value={value.us} onChange={onChange.us} required>
          私は、米国納税義務が無いことを確約します。
        </Checkbox>
      </Input>
      <p className={styles.help}>
        「米国籍」または「米国居住者（米国永住権をお持ちの方、米国での滞在日数が183日以上の方）」に該当するお客様は「あり」をご選択ください。
      </p>
      <p className={styles.help}>
        ※米国納税義務があるお客様は法人口座の開設はできません。
      </p>
    </div>

    <div className={styles.input}>
      <Input large label="居住地国" noBorder>
        <Checkbox id="jp" value={value.jp} onChange={onChange.jp} required>
          <p style={{ lineHeight: '24px' }}>
            私は、日本以外に居住地国が無いことを確約します。また、居住地国に変更があった場合は、変更があった日から3ヶ月を経過する日までに異動届出書により申告します。
          </p>
        </Checkbox>
      </Input>
      <p className={styles.help}>
        ※日本以外に居住地国をお持ちのお客様は法人口座の開設はできません。
      </p>
    </div>

    <div className={styles.input}>
      <Input large label="外国PEPs" noBorder>
        <Checkbox id="pep" value={value.pep} onChange={onChange.pep} required>
          私は外国の重要な公人、もしくはその親族ではありません。
        </Checkbox>
      </Input>
      <p className={styles.help}>
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
          外国PEPsについて
        </Link>
      </p>
    </div>

  </div>
);

JpRepForm.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

export default JpRepForm;
