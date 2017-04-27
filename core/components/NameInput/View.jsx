import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';

import styles from './styles.css';

const NameInputView = ({
  value, onChange, autoFocus, firstLabel, lastLabel, ...others
}) => (
  <div className={styles.main}>
    <div className={styles.input}>
      <TextInput
        {...others}
        value={value.first} onChange={onChange.first}
        placeholder={firstLabel || translate('name:first')}
        autoFocus={autoFocus}
      />
    </div>
    <div className={styles.input}>
      <TextInput
        {...others}
        value={value.last} onChange={onChange.last}
        placeholder={lastLabel || translate('name:last')}
      />
    </div>
  </div>
);

NameInputView.propTypes = {
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.shape({}).isRequired,
  autoFocus: PropTypes.bool,
  firstLabel: PropTypes.string,
  lastLabel: PropTypes.string,
};

export default NameInputView;
