/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import Button from '@quoine/components/Button';
import Select from '@quoine/components/Select';
import DateSelect from '@quoine/components/DateSelect';
import NameInput from '@quoine/components/NameInput';
import CountrySelect from '@quoine/components/CountrySelect';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/SignUp/Form/styles.css';

const SignUpForm3PteIndiView = ({ form, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className={styles.body}>

      <div className={styles.input}>
        <Input large id="name" label={translate('sign-up-pi:name')}>
          <NameInput value={form.name} onChange={onChange.name} autoFocus required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="birth" label={translate('sign-up-pi:birth')}>
          <DateSelect value={form.birth} onChange={onChange.birth} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="nationality" label={translate('sign-up-pi:nationality')}>
          <CountrySelect value={form.nationality} onChange={onChange.nationality} required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="address" label={translate('sign-up-pi:address')}>
          <TextBox type="text" value={form.address} onChange={onChange.address} required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="income" label={translate('sign-up-pi:income')}>
          <Select
            value={form.income} onChange={onChange.income} required
            options={[
              'employed', 'self-employed', 'other', 'retired',
            ].map(key => ({
              label: translate(`sign-up-pi:income-${key}`),
              value: key,
            }))}
          />
        </Input>
      </div>

      {form.income === 'employed' ? (
        <div className={styles.input}>
          <Input large id="income-job" label={translate('sign-up-pi:income-job')}>
            <TextBox type="text" value={form.incomeJob} onChange={onChange.incomeJob} required />
          </Input>
        </div>
      ) : null}

      {form.income === 'self-employed' ? (
        <div className={styles.input}>

          <div className={styles.input}>
            <Input large id="income-business-name" label={translate('sign-up-pi:income-business-name')}>
              <TextBox type="text" value={form.incomeBusinessName} onChange={onChange.incomeBusinessName} required />
            </Input>
          </div>

          <div className={styles.input}>
            <Input large id="income-business-type" label={translate('sign-up-pi:income-business-type')}>
              <TextBox type="text" value={form.incomeBusinessType} onChange={onChange.incomeBusinessType} required />
            </Input>
          </div>

        </div>
      ) : null}

      {form.income === 'other' ? (
        <div className={styles.input}>
          <Input large id="income-detail" label={translate('sign-up-pi:income-detail')}>
            <TextBox type="text" value={form.incomeDetail} onChange={onChange.incomeDetail} required />
          </Input>
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

SignUpForm3PteIndiView.propTypes = {
  ...FormWrapperPropTypes,
};

export default SignUpForm3PteIndiView;
