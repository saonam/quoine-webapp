import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

import RecentItem from './RecentItem';

import styles from './styles.css';

const WdrInputAddressView = ({ account, value, recents, onChange }) => (
  <div>
    <Field label={translate('withdrawal:address')}>
      <div className={styles.input}>
        <TextInput value={value} onChange={onChange} border required />
      </div>
    </Field>
    <div className={styles.recents}>
      {recents.map(address => (
        <RecentItem key={address} address={address} onClick={onChange} />
      ))}
    </div>
    {account === 'ETH' ? (
      <div className={styles.description}>
        {translate('withdrawal:eth-description')}
      </div>
    ) : null}
  </div>
);

WdrInputAddressView.propTypes = {
  account: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  recents: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WdrInputAddressView;
