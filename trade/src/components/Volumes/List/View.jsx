import React from 'react';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Field from '@quoine/components/Field';
import Money from '@quoine/components/Money';
import ColorByAccount from '@quoine/components/ColorByAccount';

// import Item from '../Item';

import styles from './styles.css';

const VolumesList = ({ busy, volumes }) => (
  busy ? (
    <div className={styles.loading}><Loading /></div>
  ) : (
    <div>
      <div className={styles.list}>
        {volumes.map(({ account, value }) => (
          value ? (
            <div key={account} className={styles.item}>
              <Field label={account} layout="justify">
                <ColorByAccount account={account}>
                  <Money value={value} currency={account} />
                </ColorByAccount>
              </Field>
            </div>
          ) : null
        ))}
      </div>
      <p className={styles.empty}>
        {translate('volume:empty', {
          list: volumes
            .filter(volume => !volume.value)
            .map(volume => volume.account)
            .join(', '),
        })}
      </p>
    </div>
  )
);

VolumesList.propTypes = {
  busy: React.PropTypes.bool.isRequired,
  volumes: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default VolumesList;
