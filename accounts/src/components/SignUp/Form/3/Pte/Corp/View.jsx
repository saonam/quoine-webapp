/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import Button from '@quoine/components/Button';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/SignUp/Form/styles.css';

const SignUpForm3PteCorpView = ({ form, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className={styles.body}>

      <div className={styles.input}>
        <Input large id="name" label={translate('sign-up-pc:name')}>
          <TextBox value={form.name} onChange={onChange.name} autoFocus required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="type" label={translate('sign-up-pc:type')}>
          <TextBox value={form.type} onChange={onChange.type} required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="address" label={translate('sign-up:address')}>
          <TextBox type="text" value={form.address} onChange={onChange.address} required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="website" label={translate('sign-up:website')}>
          <TextBox type="text" value={form.website} onChange={onChange.website} required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="tax" label={translate('sign-up:tax')}>
          <TextBox type="text" value={form.tax} onChange={onChange.tax} required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large id="vat" label={translate('sign-up:vat')}>
          <TextBox type="text" value={form.vat} onChange={onChange.vat} />
        </Input>
      </div>

    </div>

    <div className={styles.input}>
      <Button type="submit" styleName="modal accent">
        {translate('sign-up:action-next')}
      </Button>
    </div>

  </form>
);

SignUpForm3PteCorpView.propTypes = {
  ...FormWrapperPropTypes,
};

export default SignUpForm3PteCorpView;
