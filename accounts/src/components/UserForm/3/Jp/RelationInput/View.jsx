import React from 'react';

import TextInput from '@quoine/components/TextInput';
import SelectInput from '@quoine/components/SelectInput';

import styles from './styles.css';

const options = [
  '当社ホームページ', '他サイト', '雑誌', '新聞',
  '家族の紹介', '知人の紹介', 'ブログ', 'その他',
].map(value => ({ label: value, value }));

const optionsWithoutDetail = [
  '当社ホームページ', '家族の紹介', '知人の紹介',
];

const JpRelationInputView = ({ value, onChange, ...others }) => (
  <div className={styles.main}>

    <div className={styles.input}>
      <SelectInput
        value={value.type}
        onChange={onChange.type}
        options={options}
        searchable
        {...others}
      />
    </div>

    {value.type && optionsWithoutDetail.indexOf(value.type) === -1 ? (
      <div className={styles.input}>
        <TextInput
          value={value.detail}
          onChange={onChange.detail}
          placeholder="詳細を入力してください"
          {...others}
        />
      </div>
    ) : null}

  </div>
);

JpRelationInputView.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

export default JpRelationInputView;
