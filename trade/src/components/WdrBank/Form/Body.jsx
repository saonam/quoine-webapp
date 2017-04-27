import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import CheckboxInput from '@quoine/components/CheckboxInput';
import Item from './Item';

import styles from './styles.css';

/* eslint-disable quote-props */

const fields = [
  'bank-name',
  'bank-branch',
  'bank-address',
  'bank-swift',
  'account-name',
  'account-number',
  'country',
  'document',
  'reason',
];

const jointFields = [
  'joint-account-name',
  'joint-address',
  'joint-city',
  'joint-country',
  'joint-document-address',
  'joint-document-id',
];

const WdrBankFormBody = ({ form, onChange }) => (
  <div>
    {fields.map(id => (
      <div key={id} className={styles.item}>
        <Item id={id} value={form[id]} onChange={onChange[id]} />
      </div>
    ))}

    <div className={styles.item}>
      <CheckboxInput
        id="joint-account"
        value={form['joint-account']}
        onChange={onChange['joint-account']}
      >
        {translate('bank:joint-account')}
      </CheckboxInput>
    </div>

    {form['joint-account'] ? jointFields.map(id => (
      <div key={id} className={styles.item}>
        <Item id={id} value={form[id]} onChange={onChange[id]} />
      </div>
    )) : null}
  </div>
);

WdrBankFormBody.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrBankFormBody;
