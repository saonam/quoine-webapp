import React from 'react';

import translate from '@quoine/translate';

import TextBox from '@quoine/components/TextBox';

import styles from './styles.css';

const NameInputView = ({
  value, onChange, autoFocus, firstLabel, lastLabel, ...others
}) => (
  <div className={styles.main}>
    <div className={styles.input}>
      <TextBox
        value={value.first} onChange={onChange.first}
        placeholder={firstLabel || translate('name:first')}
        autoFocus={autoFocus}
        {...others}
      />
    </div>
    <div className={styles.input}>
      <TextBox
        value={value.last} onChange={onChange.last}
        placeholder={lastLabel || translate('name:last')}
        {...others}
      />
    </div>
  </div>
);

NameInputView.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
  autoFocus: React.PropTypes.bool,
  firstLabel: React.PropTypes.string,
  lastLabel: React.PropTypes.string,
};

export default NameInputView;
