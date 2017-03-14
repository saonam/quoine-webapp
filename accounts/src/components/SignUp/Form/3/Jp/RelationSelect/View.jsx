import React from 'react';

import TextBox from '@quoine/components/TextBox';
import Select from '@quoine/components/Select';

import styles from './styles.css';

const options = [
  '当社ホームページ', '他サイト', '雑誌', '新聞',
  '家族の紹介', '知人の紹介', 'ブログ', 'その他',
].map(value => ({ label: value, value }));

const optionsWithoutDetail = [
  '当社ホームページ', '家族の紹介', '知人の紹介',
];

const JpRelationSelectView = ({ value, onChange }) => (
  <div className={styles.main}>

    <div className={styles.input}>
      <Select value={value.type} onChange={onChange.type} options={options} searchable required />
    </div>

    {value.type && optionsWithoutDetail.indexOf(value.type) === -1 ? (
      <div className={styles.input}>
        <TextBox
          value={value.detail} onChange={onChange.detail} required
          placeholder="詳細を入力してください"
        />
      </div>
    ) : null}

  </div>
);

JpRelationSelectView.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

export default JpRelationSelectView;
