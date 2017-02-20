/*
  Note: this file is wide (line lenght is long) and long (many lines)
  but it's okay to keep the simple of this file
 */
/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import Select from '@quoine/components/Select';
import DateSelect from '@quoine/components/DateSelect';
import CountrySelect from '@quoine/components/CountrySelect';

import styles from './styles.css';

const BusinessWebsite = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="business-website" label={translate('sign-up:input-business-website')}>
      <TextBox autoFocus type="text" value={form.businessWebsite} onChange={onChange.businessWebsite} />
    </Input>
  </div>
);

const VatId = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="vat-id" label={translate('sign-up:input-vat-id')}>
      <TextBox type="text" value={form.vatId} onChange={onChange.vatId} />
    </Input>
  </div>
);

const TaxId = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="tax-id" label={translate('sign-up:input-tax-id')}>
      <TextBox type="text" value={form.taxId} onChange={onChange.taxId} />
    </Input>
  </div>
);

const Address = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="address" label={translate('sign-up:input-address')}>
      <TextBox type="text" value={form.address} onChange={onChange.address} />
    </Input>
  </div>
);

const IncomeJob = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="income-job" label={translate('sign-up:input-income-job')}>
      <TextBox type="text" value={form.incomeJob} onChange={onChange.incomeJob} />
    </Input>
  </div>
);

const IncomeDetail = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="income-detail" label={translate('sign-up:input-income-detail')}>
      <TextBox type="text" value={form.incomeDetail} onChange={onChange.incomeDetail} />
    </Input>
  </div>
);

const IncomeBusinessName = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="income-business-name" label={translate('sign-up:input-income-business-name')}>
      <TextBox type="text" value={form.incomeBusinessName} onChange={onChange.incomeBusinessName} />
    </Input>
  </div>
);

const IncomeBusinessType = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="income-business-type" label={translate('sign-up:input-income-business-type')}>
      <TextBox type="text" value={form.incomeBusinessType} onChange={onChange.incomeBusinessType} />
    </Input>
  </div>
);

const Birthdate = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="birthdate" label={translate('sign-up:input-birthdate')}>
      <DateSelect value={form.birthdate} onChange={onChange.birthdate} />
    </Input>
  </div>
);

const incomeOptions = ['employed', 'self-employed', 'other', 'retired'];
const Income = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="income" label={translate('sign-up:input-income')}>
      <Select
        value={form.income}
        onChange={onChange.income}
        options={incomeOptions.map(key => ({
          label: translate(`sign-up:income-type-${key}`),
          value: key,
        }))}
      />
    </Input>
  </div>
);

const Country = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="country" label={translate('sign-up:input-country')}>
      <CountrySelect
        value={form.country}
        onChange={onChange.country}
      />
    </Input>
  </div>
);

const Nationality = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input
      large
      id="nationality"
      label={translate('sign-up:input-nationality')}
    >
      <CountrySelect
        value={form.nationality}
        onChange={onChange.nationality}
      />
    </Input>
  </div>
);

const Body3 = ({ form, onChange }) => (
  <div>
    {form.type === 'individual' ? (
      <Nationality form={form} onChange={onChange} />
    ) : (
      <BusinessWebsite form={form} onChange={onChange} />
    )}
    {form.type === 'individual' ? (
      <Birthdate form={form} onChange={onChange} />
    ) : (
      <TaxId form={form} onChange={onChange} />
    )}
    {form.type === 'individual' ? null : (
      <VatId form={form} onChange={onChange} />
    )}
    <Country form={form} onChange={onChange} />
    <Address form={form} onChange={onChange} />
    {form.type === 'individual' ? (
      <Income form={form} onChange={onChange} />
    ) : null}
    {form.type === 'individual' && form.income === 'employed' ? (
      <IncomeJob form={form} onChange={onChange} />
    ) : null}
    {form.type === 'individual' && form.income === 'self-employed' ? (
      <IncomeBusinessName form={form} onChange={onChange} />
    ) : null}
    {form.type === 'individual' && form.income === 'self-employed' ? (
      <IncomeBusinessType form={form} onChange={onChange} />
    ) : null}
    {form.type === 'individual' && form.income === 'other' ? (
      <IncomeDetail form={form} onChange={onChange} />
    ) : null}
  </div>
);

const basePropTypes = {
  form: React.PropTypes.shape({
    type: React.PropTypes.oneOf(['individual', 'corporate']).isRequired,
    country: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    nationality: React.PropTypes.string.isRequired,
    birthdate: React.PropTypes.number.isRequired,
    income: React.PropTypes.string.isRequired,
    incomeJob: React.PropTypes.string.isRequired,
    incomeBusinessName: React.PropTypes.string.isRequired,
    incomeBusinessType: React.PropTypes.string.isRequired,
    incomeDetail: React.PropTypes.string.isRequired,
    businessWebsite: React.PropTypes.string.isRequired,
    taxId: React.PropTypes.string.isRequired,
    vatId: React.PropTypes.string.isRequired,
  }).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

Body3.propTypes =
  Birthdate.propTypes =
  BusinessWebsite.propTypes =
  TaxId.propTypes =
  VatId.propTypes =
  Country.propTypes =
  Nationality.propTypes =
  Address.propTypes =
  Income.propTypes =
  IncomeJob.propTypes =
  IncomeBusinessName.propTypes =
  IncomeBusinessType.propTypes =
  IncomeDetail.propTypes = basePropTypes;

export default Body3;
