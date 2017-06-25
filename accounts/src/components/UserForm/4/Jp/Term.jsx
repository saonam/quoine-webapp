import PropTypes from 'prop-types';
import React from 'react';

import CheckboxInput from '@quoine/components/CheckboxInput';
import Link from '@quoine/components/Link';

import LargeField from 'components/LargeField';

import styles from 'components/UserForm/styles.css';

const UserForm4JpTerm = ({ form, onChange }) => (
  <div>
    <p className={styles.message}>
      口座開設には、各種規定の承諾、本人確認書類の提出が必要です。
    </p>

    <p className={styles.message}>
      当社は
      <Link pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/0)+e-statement_20170322.pdf" target="_blank" styleName="accent text">
        「書面の電磁的方法による交付等取扱規程」
      </Link>
      に定める通り、利用規約等を電磁的に交付いたします。
    </p>

    <div className={styles.input}>
      <LargeField>
        <CheckboxInput
          id="first" value={form.first}
          onChange={onChange.first} required
        >
          同意します
        </CheckboxInput>
      </LargeField>
    </div>

    <ol className={styles.message}>
      <li>
        1.プライバシーポリシー（個人情報の適切な取扱い及び保護について）
        <Link pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/1)+privacy_policy_20170322.pdf" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        2.当社サービス
        <Link pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/2)+quoine_service_20170424.pdf" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        3.取引ルール
        <Link pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/3)+trading_rules_20170424.pdf" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        4.利用規約
        <Link pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/4)+T_and_C_20170424.pdf" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        5.リスク説明
        <Link pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/5)+risks_20170424.pdf" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        6.特定商取引に関する法律に基づく表示
        <Link pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/6)+SCTA_20170322.pdf" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        7.反社会的勢力でないことの確約書
        <Link pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/7)+antisocial_20170316.pdf" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
    </ol>

    <div className={styles.input}>
      <LargeField>
        <CheckboxInput
          id="second" value={form.second}
          onChange={onChange.second} required
        >
          確認し、同意します。
        </CheckboxInput>
      </LargeField>
    </div>

  </div>
);

UserForm4JpTerm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default UserForm4JpTerm;
