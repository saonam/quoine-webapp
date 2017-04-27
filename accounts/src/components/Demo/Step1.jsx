import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '../TypeButton';

import styles from './styles.css';

const Step1 = ({ onNew, onContinue }) => (
  <div className={styles.step1}>
    <div className={styles.typeButton}>
      <Button
        onClick={onNew}
        title={translate('demo:new-title')}
        description={translate('demo:new-overview')}
      />
    </div>
    <div className={styles.typeButton}>
      <Button
        onClick={onContinue}
        title={translate('demo:continue-title')}
        description={translate('demo:continue-overview')}
      />
    </div>
  </div>
);

Step1.propTypes = {
  onNew: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default Step1;
