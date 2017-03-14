/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import CountrySelect from '@quoine/components/CountrySelect';
import Button from '@quoine/components/Button';
import Checkbox from '@quoine/components/Checkbox';

import { isQUOINEJp } from 'components/SignUp/utils';

import styles from './styles.css';

const SignUpBody2 = ({ onSubmit, form, onChange }) => (
  <form onSubmit={onSubmit}>

    <div className={styles.body}>

      {/* Email */}
      <div className={styles.input}>
        <Input large id="email" label={translate('sign-up:email')}>
          <TextBox type="email" value={form.email} onChange={onChange.email} required />
        </Input>
        <p className={styles.help}>
          {translate('sign-up:email-help')}
        </p>
      </div>

      {/* Password */}
      <div className={styles.input}>
        <Input large id="password" label={translate('sign-up:password')}>
          <TextBox type="password" value={form.password} onChange={onChange.password} required />
        </Input>
        <p className={styles.help}>
          {translate('sign-up:password-help')}
        </p>
      </div>

      {/* Country */}
      <div className={styles.input}>
        <Input large id="country" label={translate('sign-up:country')}>
          <CountrySelect value={form.country} onChange={onChange.country} autoFocus required />
        </Input>
      </div>

      {isQUOINEJp(form) ? (
        <div>
          <Input large noBorder>
            <Checkbox id="country-sure" value={form.countrySure} onChange={onChange.countrySure} required>
              {form.type === 'individual' ? (
                '私は、日本以外に居住地国が無いことを確約します。'
              ) : (
                '当社は国内法人であることを確約します。'
              )}
            </Checkbox>
          </Input>
          <p className={styles.help}>
            {form.type === 'individual' ? (
              '※日本以外に居住地国をお持ちのお客様は個人口座の開設はできません。また、居住地国に変更があった場合は、変更があった日から3ヶ月を経過する日までに異動届出書により申告する必要となります。'
            ) : (
              '※国内法人以外は口座開設できません。'
            )}
          </p>
        </div>
      ) : null}

      {isQUOINEJp(form) ? (
        <div className={styles.input}>
          <Input large label="米国納税義務" noBorder>
            <Checkbox id="us" value={form.us} onChange={onChange.us} required>
              {form.type === 'individual' ? (
                '私は、米国納税義務が無いことを確約します。'
              ) : (
                '当社は、米国納税義務が無いことを確約します。'
              )}
            </Checkbox>
          </Input>
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

SignUpBody2.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default SignUpBody2;
