import React from 'react';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Button from '@quoine/components/Button';

import Field from 'components/Transfer/Field';
import BankDetail from 'components/BankDetail';

import Select from './Select';
import RemoveConfirmBox from './RemoveConfirmBox';
import ErrBox from './ErrBox';
import Remove from './Remove';
import ButtonEdit from './ButtonEdit';

import styles from './styles.css';

const WdrBank = ({ busy, current, all, open, onToggle, onAdd }) => {
  if (busy) { return <Loading />; }

  if (all.length === 0) {
    return (
      <Field label={translate('withdrawal:bank')}>
        <div className={styles.aloneButton}>
          <Button styleName="accent text full" onClick={onAdd}>
            {translate('bank:add-action')}
          </Button>
        </div>
      </Field>
    );
  }

  const bank = all.filter(b => b.id === current)[0];
  return (
    <div>
      <Select current={current} all={all} />
      <div className={styles.buttons}>
        <Button styleName="accent text full" onClick={onToggle}>
          {translate(`bank:detail-${open ? 'hide' : 'show'}`)}
        </Button>
        <ButtonEdit bank={bank} />
        <Remove bank={bank} />
      </div>
      <div className={styles.add}>
        <Button styleName="accent text full" onClick={onAdd}>
          {translate('bank:add-action')}
        </Button>
      </div>
      <div>
        {open ? <BankDetail bank={bank} /> : null}
        <RemoveConfirmBox bank={bank} />
        <ErrBox bank={bank} />
      </div>
    </div>
  );
};

WdrBank.propTypes = {
  busy: React.PropTypes.bool.isRequired,
  current: React.PropTypes.number.isRequired,
  all: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  // ===
  open: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  // ===
  onAdd: React.PropTypes.func.isRequired,
};

export default WdrBank;
