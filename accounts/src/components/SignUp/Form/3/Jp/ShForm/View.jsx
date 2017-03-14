/* eslint-disable max-len */

import React from 'react';

import Button from '@quoine/components/Button';
import Input from '@quoine/components/Input';
import NameInput from '@quoine/components/NameInput';
import DateSelect from '@quoine/components/DateSelect';
import Checkbox from '@quoine/components/Checkbox';
import Link from '@quoine/components/Link';

import styles from 'components/SignUp/Form/styles.css';

import AddressSelect from '../AddressSelect';
import KanaNameInput from '../KanaNameInput';
import ShBusinessInput from '../ShBusinessInput';
import ShTypeInput from '../ShTypeInput';

const ShFormItem = ({ index, value, onRemove, onChange }) => (
  <div>

    <p>
      実質的支配者{index + 1}
    </p>

    <div className={styles.input}>
      <Input large label="事業形態">
        <ShBusinessInput value={value.business} onChange={onChange.business} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="実質支配者に該当する方" noBorder>
        <ShTypeInput id={`${index}-type`} business={value.business} value={value.type} onChange={onChange.type} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="名前（漢字）">
        <NameInput value={value.nameKanji} onChange={onChange.nameKanji} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="名前（カナ）">
        <KanaNameInput value={value.nameKana} onChange={onChange.nameKana} required />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="生年月日">
        <DateSelect value={value.birth} onChange={onChange.birth} />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large label="居住地国" noBorder>
        <Checkbox id={`${index}-jp`} value={value.jp} onChange={onChange.jp} required>
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
      <Input large label="米国納税義務" noBorder>
        <Checkbox id={`${index}-sh-us`} value={value.us} onChange={onChange.us} required>
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
      <Input large label="外国PEPs" noBorder>
        <Checkbox id={`${index}-sh-pep`} value={value.pep} onChange={onChange.pep} required>
          私は外国の重要な公人、もしくはその親族ではありません。
        </Checkbox>
      </Input>
      <p className={styles.help}>
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
          外国PEPsについて
        </Link>
      </p>
    </div>

    <div className={styles.input}>
      <Input large label="ご住所">
        <AddressSelect value={value.address} onChange={onChange.address} />
      </Input>
    </div>

    <div className={styles.input}>
      <Input large noBorder>
        <Button styleName="full text negative-bg" onClick={onRemove}>
          実質的支配者{index + 1}の削除
        </Button>
      </Input>
    </div>

  </div>
);

ShFormItem.propTypes = {
  index: React.PropTypes.number.isRequired,
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
  onRemove: React.PropTypes.func.isRequired,
};

export default ShFormItem;
