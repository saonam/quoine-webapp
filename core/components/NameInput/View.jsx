import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';

import styles from './styles.css';

const NameInputView = ({
  value, onChange, autoFocus, firstLabel, lastLabel, reverse, ...others
}) => {
  const first = (
    <TextInput
      {...others}
      value={value.first} onChange={onChange.first}
      placeholder={firstLabel || translate('name:first')}
      autoFocus={autoFocus}
    />
  );
  const last = (
    <TextInput
      {...others}
      value={value.last} onChange={onChange.last}
      placeholder={lastLabel || translate('name:last')}
    />
  );

  if (reverse) {
    return (
      <div className={styles.main}>
        <div className={styles.input}>{last}</div>
        <div className={styles.input}>{first}</div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.input}>{first}</div>
      <div className={styles.input}>{last}</div>
    </div>
  );
};

NameInputView.propTypes = {
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.shape({}).isRequired,
  autoFocus: PropTypes.bool,
  firstLabel: PropTypes.string,
  lastLabel: PropTypes.string,
  reverse: PropTypes.bool,
};

export default NameInputView;
