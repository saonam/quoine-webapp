import React from 'react';

import translate from '@quoine/translate';

import Button from 'components/TypeButton';

import styles from './styles.css';

const SignUpForm1View = ({ onIndividual, onCorporate }) => (
  <div className={styles.bodyFull}>

    <div className={styles.input}>
      <Button
        onClick={onIndividual}
        title={translate('sign-up:type-individual-title')}
        description={translate('sign-up:type-individual-description')}
      />
    </div>

    <div className={styles.input}>
      <Button
        onClick={onCorporate}
        title={translate('sign-up:type-corporate-title')}
        description={translate('sign-up:type-corporate-description')}
      />
    </div>

  </div>
);

SignUpForm1View.propTypes = {
  onIndividual: React.PropTypes.func.isRequired,
  onCorporate: React.PropTypes.func.isRequired,
};

export default SignUpForm1View;
