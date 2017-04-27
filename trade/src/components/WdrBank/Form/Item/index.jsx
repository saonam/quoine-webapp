import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import TextInput from '@quoine/components/TextInput';
import CountryInput from '@quoine/components/CountryInput';
import FileInput from '@quoine/components/FileInput';

import styles from './styles.css';

/* eslint-disable quote-props */

const Elements = {
  'bank-name': TextInput,
  'bank-branch': TextInput,
  'bank-address': TextInput,
  'bank-swift': TextInput,
  'account-name': TextInput,
  'account-number': TextInput,
  'country': CountryInput,
  'document': FileInput,
  'reason': TextInput,
  'joint-account-name': TextInput,
  'joint-address': TextInput,
  'joint-city': TextInput,
  'joint-country': CountryInput,
  'joint-document-address': FileInput,
  'joint-document-id': FileInput,
};

const WdrBankFormItem = ({ id, ...others }) => {
  const Element = Elements[id];
  return (
    <Field
      label={<h1 className={styles.label}>{translate(`bank:${id}`)}</h1>}
    >
      <div className={styles.children}>
        <Element id={id} {...others} border required />
      </div>
    </Field>
  );
};

WdrBankFormItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default WdrBankFormItem;
