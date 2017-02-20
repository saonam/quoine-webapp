import React from 'react';

import translate from '@quoine/translate';

import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const statusToGlyph = {
  filling: 'edit',
  unfilled: '',
  filled: 'check',
};

const getStatus = (step, current) => {
  if (step === current) {
    return 'filling';
  }
  if (step > current) {
    return 'unfilled';
  }
  return 'filled';
};

const Steps = ({ step, type }) => (
  <div className={styles.main}>
    <h1 className={styles[getStatus(2, step)]}>
      <span>{translate('sign-up:step-2')}</span>
      <Icon glyph={statusToGlyph[getStatus(2, step)]} />
    </h1>
    <h1 className={styles[getStatus(3, step)]}>
      <span>
        {type === 'individual' ? (
          translate('sign-up:step-3-individual')
        ) : (
          translate('sign-up:step-3-corporate')
        )}
      </span>
      <Icon glyph={statusToGlyph[getStatus(3, step)]} />
    </h1>
    <h1 className={styles[getStatus(4, step)]}>
      <span>{translate('sign-up:step-4')}</span>
      <Icon glyph={statusToGlyph[getStatus(4, step)]} />
    </h1>
  </div>
);

Steps.propTypes = {
  step: React.PropTypes.number.isRequired,
  type: React.PropTypes.oneOf(['individual', 'corporate']).isRequired,
};

export default Steps;
