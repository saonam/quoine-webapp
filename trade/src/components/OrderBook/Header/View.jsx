import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';
import Field from '@quoine/components/Field';
import SelectInput from '@quoine/components/SelectInput';

import styles from './styles.css';

const options = ['normal', 'depth-chart'];

const OrderBookHeader = ({ side, mode, onChangeMode }) => (
  <Header styleName="text hor-medium" className={styles.main}>
    <div className={styles.title}>
      {translate(`order-book:${side}`)}
    </div>
    {side === 'sells' ? (
      <div className={styles.select}>
        <Field label={translate('order-book:mode')} layout="inline">
          <SelectInput
            value={mode}
            options={options.map(value => ({
              label: translate(`order-book:mode-${value}`), value,
            }))}
            onChange={onChangeMode}
          />
        </Field>
      </div>
    ) : null}
  </Header>
);

OrderBookHeader.propTypes = {
  side: React.PropTypes.oneOf(['sells', 'buys']).isRequired,
  mode: React.PropTypes.oneOf(['normal', 'depth-chart']).isRequired,
  onChangeMode: React.PropTypes.func.isRequired,
};

export default OrderBookHeader;
