import React from 'react';

import Select from '@quoine/components/Select';
import TextBox from '@quoine/components/TextBox';

import styles from './styles.css';

const options = [
  '金融・保険', '情報・通信', '農林水産', 'エネルギー・素材・繊維',
  '建築・土木・プラント', '医療品・化粧品', '鉄鋼・非鉄・金属・製品',
  '水産加工・食料品・飲料・酒類', '電気・電子・コンピューター・通信機器',
  '自動車・自動車部品', '機械・機械機器・精密機械', 'その他製造業',
  '商社・流通業', '広告・イベントデザイン', '新聞・出版・放送',
  '運輸・交通', '医療機関', '外食・各種サービス', '国・自治体・公共機関',
  '教育', 'その他',
].map(value => ({ label: value, value }));

const JpIndustrySelect = ({ value, onChange }) => (
  <div>
    <div className={styles.input}>
      <Select
        value={value.type}
        onChange={onChange.type}
        options={options}
        searchable
        required
      />
    </div>
    <div className={styles.input}>
      {value.type && value.type === 'その他' ? (
        <TextBox
          value={value.detail}
          onChange={onChange.detail}
          placeholder="詳細を入力してください"
          required
        />
      ) : null}
    </div>
  </div>
);

JpIndustrySelect.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

export default JpIndustrySelect;
