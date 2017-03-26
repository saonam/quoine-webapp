/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import SelectInput from '@quoine/components/SelectInput';
import DateInput from '@quoine/components/DateInput';
import NameInput from '@quoine/components/NameInput';
import CountryInput from '@quoine/components/CountryInput';
import Button from '@quoine/components/Button';

import LargeField from 'components/LargeField';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/UserForm/styles.css';

const UserForm3PteIndiView = ({ form, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label={translate('sign-up-pi:name')}>
          <NameInput
            value={form.name} onChange={onChange.name}
            autoFocus border required
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up-pi:birth')}>
          <DateInput
            value={form.birth} onChange={onChange.birth}
            border
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up-pi:nationality')}>
          <CountryInput
            value={form.nationality} onChange={onChange.nationality}
            border required
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up-pi:address')}>
          <TextInput
            value={form.address} onChange={onChange.address}
            border required
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up-pi:income')}>
          <SelectInput
            value={form.income} onChange={onChange.income}
            options={[
              'employed', 'self-employed', 'other', 'retired',
            ].map(key => ({
              label: translate(`sign-up-pi:income-${key}`),
              value: key,
            }))}
            border required
          />
        </LargeField>
      </div>

      {form.income === 'employed' ? (
        <div className={styles.input}>
          <LargeField label={translate('sign-up-pi:income-job')}>
            <TextInput
              value={form.incomeJob} onChange={onChange.incomeJob}
              border required
            />
          </LargeField>
        </div>
      ) : null}

      {form.income === 'self-employed' ? (
        <div className={styles.input}>

          <div className={styles.input}>
            <LargeField label={translate('sign-up-pi:income-business-name')}>
              <TextInput
                value={form.incomeBusinessName} onChange={onChange.incomeBusinessName}
                border required
              />
            </LargeField>
          </div>

          <div className={styles.input}>
            <LargeField label={translate('sign-up-pi:income-business-type')}>
              <TextInput
                value={form.incomeBusinessType} onChange={onChange.incomeBusinessType}
                border required
              />
            </LargeField>
          </div>

        </div>
      ) : null}

      {form.income === 'other' ? (
        <div className={styles.input}>
          <LargeField label={translate('sign-up-pi:income-detail')}>
            <TextInput
              value={form.incomeDetail} onChange={onChange.incomeDetail}
              border required
            />
          </LargeField>
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

UserForm3PteIndiView.propTypes = {
  ...FormWrapperPropTypes,
};

export default UserForm3PteIndiView;
