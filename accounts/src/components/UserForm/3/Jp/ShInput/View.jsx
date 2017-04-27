import PropTypes from 'prop-types';
/* eslint-disable max-len */

import React from 'react';

import Button from '@quoine/components/Button';
import DateInput from '@quoine/components/DateInput';
import CheckboxInput from '@quoine/components/CheckboxInput';
import Link from '@quoine/components/Link';

import LargeField from 'components/LargeField';
import styles from 'components/UserForm/styles.css';

import AddressInput from '../AddressInput';
import KanaNameInput from '../KanaNameInput';
import KanjiNameInput from '../KanjiNameInput';
import ShBusinessInput from '../ShBusinessInput';
import ShTypeInput from '../ShTypeInput';

const ShsInputItemView = ({ index, value, onRemove, onChange, required, ...others }) => (
  <div>

    <p>
      実質的支配者{index + 1}
    </p>

    <div className={styles.input}>
      <LargeField label="事業形態">
        <ShBusinessInput
          value={value.business} onChange={onChange.business}
          required={required}
          {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="実質支配者に該当する方">
        <ShTypeInput
          id={`${index}-type`} business={value.business}
          value={value.type} onChange={onChange.type}
          required={required} {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="名前（漢字）">
        <KanjiNameInput
          value={value.nameKanji} onChange={onChange.nameKanji}
          required={required} {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="名前（カナ）">
        <KanaNameInput
          value={value.nameKana} onChange={onChange.nameKana}
          required={required} {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="生年月日">
        <DateInput
          value={value.birth} onChange={onChange.birth}
          required={required} {...others}
        />
      </LargeField>
    </div>

    <div className={styles.input}>
      <LargeField label="居住地国">
        <CheckboxInput id={`${index}-jp`} value={value.jp} onChange={onChange.jp} required={required}>
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
      <LargeField label="米国納税義務">
        <CheckboxInput id={`${index}-sh-us`} value={value.us} onChange={onChange.us} required={required}>
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
      <LargeField label="外国PEPs">
        <CheckboxInput id={`${index}-sh-pep`} value={value.pep} onChange={onChange.pep} required={required}>
          私は外国の重要な公人、もしくはその親族ではありません。
        </CheckboxInput>
      </LargeField>
      <p className={styles.help}>
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
          外国PEPsについて
        </Link>
      </p>
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
      <LargeField>
        <Button styleName="full text negative-bg" onClick={onRemove}>
          実質的支配者{index + 1}の削除
        </Button>
      </LargeField>
    </div>

  </div>
);

ShsInputItemView.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.shape({}).isRequired,
  onRemove: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default ShsInputItemView;
