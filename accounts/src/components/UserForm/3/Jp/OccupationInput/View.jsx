import React from 'react';

import TextInput from '@quoine/components/TextInput';
import SelectInput from '@quoine/components/SelectInput';

import styles from './styles.css';

const jobOptions = [
  '会社役員', '会社員', '公務員', '団体職員', '医師・その他医療関係',
  '弁護士・会計士・税理士', '教職員', '自営業', 'パート・アルバイト・派遣・契約',
  '専業主婦（主夫）', '学生', '無職',
].map(value => ({ label: value, value }));

const jobWithoutIndustry = ['専業主婦（主夫）', '学生', '無職'];
const jobWithoutName = ['専業主婦（主夫）', '無職'];

const industryOptions = [
  '農業', '林業', '漁業', '鉱業', '建設業', '製造業', '電気・ガス・水道業',
  '卸売業・小売業', '情報通信業', '運輸業', '金融・保険業', '不動産業', '飲食・宿泊業',
  '医療・福祉', '教育・学習支援業', '公務', 'サービス業', 'その他',
].map(value => ({ label: value, value }));

const JpOccupationInputView = ({ value, onChange, ...others }) => (
  <div className={styles.main}>

    <div className={styles.input}>
      <SelectInput
        value={value.job}
        onChange={onChange.job}
        options={jobOptions}
        searchable
        {...others}
      />
    </div>

    {value.job && jobWithoutIndustry.indexOf(value.job) === -1 ? (
      <div className={styles.input}>
        <SelectInput
          value={value.industry}
          onChange={onChange.industry}
          options={industryOptions}
          placeholder="業種を選択してください。"
          searchable
          {...others}
        />
      </div>
    ) : null}

    {value.industry === 'その他' ? (
      <div className={styles.input}>
        <TextInput
          value={value.detail}
          onChange={onChange.detail}
          placeholder="詳細を入力してください"
          {...others}
        />
      </div>
    ) : null}

    {value.job && jobWithoutName.indexOf(value.job) === -1 ? (
      <div className={styles.input}>
        <div>
          <TextInput
            value={value.name}
            onChange={onChange.name}
            placeholder="勤務先名"
            {...others}
          />
        </div>
        <p className={styles.help}>
          ※自営業の場合は屋号、学生で所得がない場合は学校名をご記入ください。
        </p>
      </div>
    ) : null}

  </div>
);

JpOccupationInputView.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

export default JpOccupationInputView;
