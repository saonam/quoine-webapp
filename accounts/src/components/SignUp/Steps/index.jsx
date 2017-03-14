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

const Steps = ({ current }) => (
  <div className={styles.main}>
    {[1, 2, 3, 4].map((step) => {
      const status = getStatus(step, current);
      return (
        <h1 key={step} className={styles[status]}>
          <span>{translate(`sign-up:step-${step}`)}</span>
          <Icon glyph={statusToGlyph[status]} />
        </h1>
      );
    })}
  </div>
);

Steps.propTypes = {
  current: React.PropTypes.number.isRequired,
};

export default Steps;
