import PropTypes from 'prop-types';
import React from 'react';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';
import CheckboxInput from '@quoine/components/CheckboxInput';
import Link from '@quoine/components/Link';

import styles from './styles.css';

const labels = {
  'privacy-policy': 'プライバシーポリシー（個人情報の適切な取扱い及び保護について）',
  'service': '当社サービス',
  'trading-rules': '取引ルール',
  'term-and-condition': '利用規約',
  'risks': 'リスク説明',
  'scta': '特定商取引に関する法律に基づく表示',
  'antisocial': '反社会的勢力でないことの確約書',
};

const TermListView = ({ busy, documents, newOnly, form, onChange }) => {
  if (busy) {
    return (<LoadingIconWrapper />);
  }

  const { eStatement, terms } = documents;
  return (
    <div>
      <p className={styles.message}>
        {newOnly ? (
          '以下の書面が改正されましたのでご確認ください。'
        ) : (
          '口座開設には、各種規定の承諾、本人確認書類の提出が必要です。'
        )}
      </p>

      {eStatement ? (
        <div>
          <p className={styles.message}>
            当社は
            <Link pathname={eStatement.url} target="_blank" styleName="accent text">
              「書面の電磁的方法による交付等取扱規程」
            </Link>
            に定める通り、利用規約等を電磁的に交付いたします。
          </p>

          <div className={styles.input}>
            <CheckboxInput
              id="first" value={form.first}
              onChange={onChange.first} required
            >
              同意します
            </CheckboxInput>
          </div>
        </div>
      ): null}

      <ol className={styles.message}>
        {terms.map((term, index) => (
          <li key={index}>
            {index + 1}. {labels[term.type]}
            <Link pathname={term.url} target="_blank" styleName="accent text">（PDF）</Link>
          </li>
        ))}
      </ol>

      <div className={styles.input}>
        <CheckboxInput
          id="second" value={form.second}
          onChange={onChange.second} required
        >
          確認し、同意します。
        </CheckboxInput>
      </div>

    </div>
  );
};

TermListView.propTypes = {
  busy: PropTypes.bool.isRequired,
  documents: PropTypes.shape({
    eStatement: PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
    }),
    terms: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        url: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  // ===
  newOnly: PropTypes.bool,
  // ===
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default TermListView;
