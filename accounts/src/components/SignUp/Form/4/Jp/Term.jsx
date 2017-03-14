import React from 'react';

import Input from '@quoine/components/Input';
import Checkbox from '@quoine/components/Checkbox';
import Link from '@quoine/components/Link';

import styles from 'components/SignUp/Form/styles.css';

const SignUpBody4JpTerm = ({ form, onChange }) => (
  <div>
    <p className={styles.message}>
      口座開設には、各種規定の承諾、本人確認書類の提出が必要です。
    </p>

    <p className={styles.message}>
      当社は
      <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
        「書面の電磁的方法による交付等取扱規程」
      </Link>
      に定める通り、利用規約等を電磁的に交付いたします。
    </p>

    <div className={styles.input}>
      <Input large noBorder>
        <Checkbox id="first" value={form.first} onChange={onChange.first} required>
          同意します
        </Checkbox>
      </Input>
    </div>

    <ol className={styles.message}>
      <li>
        1.プライバシーポリシー（個人情報の適切な取扱い及び保護について）
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        2.取引ルール
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        3.利用規約
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        4.リスク説明
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        5.特定商取引に関する法律に基づく表示
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
      <li>
        6.反社会的勢力でないことの確約書
        <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">（PDF）</Link>
      </li>
    </ol>

    <div className={styles.input}>
      <Input large noBorder>
        <Checkbox id="second" value={form.second} onChange={onChange.second} required>
          確認し、同意します。
        </Checkbox>
      </Input>
    </div>

  </div>
);

SignUpBody4JpTerm.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default SignUpBody4JpTerm;
