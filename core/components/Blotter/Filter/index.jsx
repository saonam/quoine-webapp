import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';
import Field from '@quoine/components/Field';
import Select from './Select';

import styles from './styles.css';

const BlotterFilter = ({ currents, selects, onSet, namespace }) => (
  <Header styleName="hor-medium" className={styles.main}>
    {Object.keys(selects).map(key => (
      <div key={key} className={styles.filter}>
        <Field layout="inline" label={translate(`${namespace}:${key}`)}>
          <Select
            name={key}
            current={currents[key]}
            values={selects[key]}
            onSet={onSet}
            namespace={namespace}
          />
        </Field>
      </div>
    ))}
  </Header>
);

BlotterFilter.propTypes = {
  currents: React.PropTypes.shape({}).isRequired,
  selects: React.PropTypes.shape({}).isRequired,
  namespace: React.PropTypes.string.isRequired,
  onSet: Select.propTypes.onSet,
};

export default BlotterFilter;
