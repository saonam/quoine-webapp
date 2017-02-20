import React from 'react';

import translate from '@quoine/translate';

import Button from '../TypeButton';

import styles from './styles.css';

const Body1View = ({ onSelectIndividual, onSelectCorporate }) => (
  <div className={styles.body1Content}>
    <div className={styles.input}>
      <Button
        onClick={onSelectIndividual}
        title={translate('sign-up:type-individual-title')}
        description={translate('sign-up:type-individual-description')}
      />
    </div>
    <div className={styles.input}>
      <Button
        onClick={onSelectCorporate}
        title={translate('sign-up:type-corporate-title')}
        description={translate('sign-up:type-corporate-description')}
      />
    </div>
  </div>
);

Body1View.propTypes = {
  onSelectIndividual: React.PropTypes.func.isRequired,
  onSelectCorporate: React.PropTypes.func.isRequired,
};

export default Body1View;
