import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Button from '@quoine/components/Button';

import Remove from '../Remove';
import Select from '../Select';
import RemoveConfirmBox from '../RemoveConfirmBox';
import ErrBox from '../ErrBox';

import styles from './styles.css';

const WdrAddress = ({ busy, current, all, address, onAdd, onVerify }) => {
  if (busy) { return <Loading />; }

  if (!all.length) {
    return (
      <div className={styles.add}>
        <Button styleName="accent text full" onClick={onAdd}>
          {translate('wdr-address:add-action')}
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Select current={current} all={all} />
      <div className={styles.buttons}>
        {address.status === 'awaiting-confirmation' ? (
          <Button styleName="accent text full" onClick={onVerify}>
            {translate('wdr-address:confirm-action')}
          </Button>
        ) : null}
        <Remove address={address} />
      </div>
      <div className={styles.add}>
        <Button styleName="accent text full" onClick={onAdd}>
          {translate('wdr-address:add-action')}
        </Button>
      </div>
      <div>
        <RemoveConfirmBox address={address} />
        <ErrBox address={address} />
      </div>
    </div>
  );
};

WdrAddress.propTypes = {
  busy: PropTypes.bool.isRequired,
  current: PropTypes.number.isRequired,
  all: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  address: PropTypes.shape({}).isRequired,
  onAdd: PropTypes.func.isRequired,
  onVerify: PropTypes.func.isRequired,
};

export default WdrAddress;
