/*
  Note: this file is wide (line lenght is long) and long (many lines)
  but it's okay to keep the simple of this file
 */

import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';

import styles from './styles.css';

const Email = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="email" label={translate('sign-up:input-email')}>
      <TextBox type="email" value={form.email} onChange={onChange.email} />
    </Input>
  </div>
);

const Password = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="password" label={translate('sign-up:input-password')}>
      <TextBox type="password" value={form.password} onChange={onChange.password} />
    </Input>
    <p className={styles.hint}>
      {translate('sign-up:input-password-hint')}
    </p>
  </div>
);

const FirstName = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="first-name" label={translate('sign-up:input-first-name')}>
      <TextBox autoFocus type="text" value={form.firstName} onChange={onChange.firstName} />
    </Input>
  </div>
);

const LastName = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="last-name" label={translate('sign-up:input-last-name')}>
      <TextBox type="text" value={form.lastName} onChange={onChange.lastName} />
    </Input>
  </div>
);

const BusinessName = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="business-name" label={translate('sign-up:input-business-name')}>
      <TextBox autoFocus type="text" value={form.businessName} onChange={onChange.businessName} />
    </Input>
  </div>
);

const BusinessType = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="business-type" label={translate('sign-up:input-business-type')}>
      <TextBox type="text" value={form.businessType} onChange={onChange.businessType} />
    </Input>
  </div>
);

const Body2 = ({ form, onChange }) => (
  <div>
    {form.type === 'individual' ? (
      <FirstName form={form} onChange={onChange} />
    ) : (
      <BusinessName form={form} onChange={onChange} />
    )}
    {form.type === 'individual' ? (
      <LastName form={form} onChange={onChange} />
    ) : (
      <BusinessType form={form} onChange={onChange} />
    )}
    <Email form={form} onChange={onChange} />
    <Password form={form} onChange={onChange} />
  </div>
);

Body2.propTypes = {
  form: React.PropTypes.shape({
    type: React.PropTypes.oneOf(['individual', 'corporate']).isRequired,
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    businessName: React.PropTypes.string.isRequired,
    businessType: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
  }).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

Email.propTypes = Password.propTypes = Body2.propTypes;
BusinessName.propTypes = BusinessType.propTypes = Body2.propTypes;
FirstName.propTypes = LastName.propTypes = Body2.propTypes;

export default Body2;
