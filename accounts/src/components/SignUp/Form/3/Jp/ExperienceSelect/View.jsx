import React from 'react';

import Select from '@quoine/components/Select';

import initialForm from './initialForm';

import styles from './styles.css';

const options = [
  '5年以上', '5年未満', '4年未満', '3年未満', '2年未満', '1年未満',
].map((value) => ({ value, label: value }));

const labels = {
  fx: 'FX・CFD取引',
  stocks: '現物株式',
  margin: '信用株式',
  option: '先物オプション',
  commodities: '商品先物',
};

const JpPurposeSelect = ({ value, onChange }) => (
  <div>
    {Object.keys(initialForm).map((key) => (
      <div key={key} className={styles.row}>
        <h1 className={styles.label}>
          {labels[key]}
        </h1>
        <div className={styles.select}>
          <Select
            value={value[key]} onChange={onChange[key]} options={options}
            searchable required
          />
        </div>
      </div>
    ))}
  </div>
);

JpPurposeSelect.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

export default JpPurposeSelect;
