/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import CountryInput from '@quoine/components/CountryInput';
import Button from '@quoine/components/Button';
import CheckboxInput from '@quoine/components/CheckboxInput';

import LargeField from 'components/LargeField';
import styles from 'components/UserForm/styles.css';

const UserForm2View = ({ onSubmit, form, onChange }) => (
  <form onSubmit={onSubmit}>

    <div className={styles.body}>

      {/* Email */}
      <div className={styles.input}>
        <LargeField label={translate('sign-up:email')}>
          <TextInput type="email" value={form.email} onChange={onChange.email} border required />
        </LargeField>
        <p className={styles.help}>
          {translate('sign-up:email-help')}
        </p>
      </div>

      {/* Password */}
      <div className={styles.input}>
        <LargeField label={translate('sign-up:password')}>
          <TextInput
            type="password" value={form.password} onChange={onChange.password} border required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$" title={translate('sign-up:password-help')}
          />
        </LargeField>
        <p className={styles.help}>
          {translate('sign-up:password-help')}
        </p>
      </div>

      {/* Country */}
      <div className={styles.input}>
        <LargeField label={translate('sign-up:country')}>
          <CountryInput value={form.country} onChange={onChange.country} autoFocus border required />
        </LargeField>
      </div>

      {form.isQuoineJapan ? (
        <div>
          <LargeField>
            <CheckboxInput id="country-sure" value={form.countrySure} onChange={onChange.countrySure} required>
              {form.type === 'individual' ? (
                '私は、日本以外に居住地国が無いことを確約します。'
              ) : (
                '当社は国内法人であることを確約します。'
              )}
            </CheckboxInput>
          </LargeField>
          <p className={styles.help}>
            {form.type === 'individual' ? (
              '※日本以外に居住地国をお持ちのお客様は個人口座の開設はできません。また、居住地国に変更があった場合は、変更があった日から3ヶ月を経過する日までに異動届出書により申告する必要となります。'
            ) : (
              '※国内法人以外は口座開設できません。'
            )}
          </p>
        </div>
      ) : null}

      {form.isQuoineJapan ? (
        <div className={styles.input}>
          <LargeField label="米国納税義務">
            <CheckboxInput id="us" value={form.us} onChange={onChange.us} required>
              {form.type === 'individual' ? (
                '私は、米国納税義務が無いことを確約します。'
              ) : (
                '当社は、米国納税義務が無いことを確約します。'
              )}
            </CheckboxInput>
          </LargeField>
          {form.type === 'individual' ? (
            <p className={styles.help}>
              「米国籍」または「米国居住者（米国永住権をお持ちの方、米国での滞在日数が183日以上の方）」に該当するお客様は「あり」をご選択ください。
            </p>
          ) : (
            <p className={styles.help}>
              ※米国納税義務があるお客様は法人口座の開設はできません。
            </p>
          )}
          {form.type === 'individual' ? (
            <p className={styles.help}>
              ※米国納税義務があるお客様は個人口座の開設はできません。
            </p>
          ) : null}
        </div>
      ) : null}

    </div>

    <div className={styles.input}>
      <Button type="submit" styleName="modal accent">
        {translate('sign-up:action-next')}
      </Button>
    </div>

  </form>
);

UserForm2View.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default UserForm2View;
