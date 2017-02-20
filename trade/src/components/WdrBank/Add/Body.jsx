import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import CountrySelect from '@quoine/components/CountrySelect';
import FileSelect from '@quoine/components/FileSelect';
import Checkbox from '@quoine/components/Checkbox';

import styles from './styles.css';

const fields = [
  { id: 'bank-name', Element: TextBox },
  { id: 'bank-branch', Element: TextBox },
  { id: 'bank-address', Element: TextBox },
  { id: 'bank-swift', Element: TextBox },
  { id: 'account-name', Element: TextBox },
  { id: 'account-number', Element: TextBox },
  { id: 'country', Element: CountrySelect },
  { id: 'document', Element: FileSelect },
  { id: 'reason', Element: TextBox },
];

const jointFields = [
  { id: 'joint-account-name', Element: TextBox },
  { id: 'joint-address', Element: TextBox },
  { id: 'joint-city', Element: TextBox },
  { id: 'joint-country', Element: CountrySelect },
  { id: 'joint-document-address', Element: FileSelect },
  { id: 'joint-document-id', Element: FileSelect },
];

const WdrBankAddBody = ({ form, onChange }) => (
  <div>

    {fields.map(({ id, Element }) => (
      <div key={id} className={styles.item}>
        <Input id={id} label={translate(`bank:${id}`)}>
          <Element
            id={id}
            value={form[id]}
            onChange={onChange[id]}
            required
          />
        </Input>
      </div>
    ))}

    <div className={styles.item}>
      <Checkbox
        id="joint-account"
        value={form['joint-account']}
        onChange={onChange['joint-account']}
        required
      >
        {translate('bank:joint-account')}
      </Checkbox>
    </div>

    {form['joint-account'] ? jointFields.map(({ id, Element }) => (
      <div key={id} className={styles.item}>
        <Input id={id} label={translate(`bank:${id}`)}>
          <Element
            id={id}
            value={form[id]}
            onChange={onChange[id]}
            required
          />
        </Input>
      </div>
    )) : null}

  </div>
);

WdrBankAddBody.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default WdrBankAddBody;
