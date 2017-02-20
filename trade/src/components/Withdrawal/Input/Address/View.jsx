import React from 'react';
import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';

import RecentItem from './RecentItem';

import styles from './styles.css';

const WdrInputAddressView = ({ value, recents, onChange }) => (
  <div>
    <Input id="withdrawal-address" label={translate('withdrawal:address')}>
      <div className={styles.input}>
        <TextBox value={value} onChange={onChange} required />
      </div>
    </Input>
    <div className={styles.recents}>
      {recents.map(address => (
        <RecentItem key={address} address={address} onClick={onChange} />
      ))}
    </div>
  </div>
);

WdrInputAddressView.propTypes = {
  value: React.PropTypes.string.isRequired,
  recents: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default WdrInputAddressView;
