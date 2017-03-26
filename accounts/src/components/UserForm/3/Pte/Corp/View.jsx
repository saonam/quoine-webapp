/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Button from '@quoine/components/Button';

import LargeField from 'components/LargeField';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/UserForm/styles.css';

const UserForm3PteCorpView = ({ form, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label={translate('sign-up-pc:name')}>
          <TextInput
            value={form.name} onChange={onChange.name}
            autoFocus border required
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up-pc:type')}>
          <TextInput
            value={form.type} onChange={onChange.type}
            border required
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up:address')}>
          <TextInput
            value={form.address} onChange={onChange.address}
            border required
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up:website')}>
          <TextInput
            value={form.website} onChange={onChange.website}
            border required
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up:tax')}>
          <TextInput
            value={form.tax} onChange={onChange.tax}
            border required
          />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label={translate('sign-up:vat')}>
          <TextInput
            value={form.vat} onChange={onChange.vat}
            border
          />
        </LargeField>
      </div>

    </div>

    <div className={styles.input}>
      <Button type="submit" styleName="modal accent">
        {translate('sign-up:action-next')}
      </Button>
    </div>

  </form>
);

UserForm3PteCorpView.propTypes = {
  ...FormWrapperPropTypes,
};

export default UserForm3PteCorpView;
