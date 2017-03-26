import React from 'react';

import translate from '@quoine/translate';

import ColorByValue from '@quoine/components/ColorByValue';
import Money from '@quoine/components/Money';

import Field from 'components/MrgAccDetail/Field';

import styles from './styles.css';

const MrgAccDetailReportBody = ({ result }) => (
  <div>
    <p className={styles.text}>
      {translate('mrg-acc-close:report-description', {
        count: result.count,
        side: result.side,
      })}
    </p>

    {result.account ? (
      <div className={styles.item}>
        <Field id="position-total">
          <Money value={result.position} currency={result.baseCurrency} />
        </Field>

        <Field id="pnl-total">
          <ColorByValue value={result.pnl}>
            <Money value={result.pnl} currency={result.account} />
          </ColorByValue>
        </Field>
      </div>
    ) : null}

  </div>
);

MrgAccDetailReportBody.propTypes = {
  result: React.PropTypes.shape({}),
};

export default MrgAccDetailReportBody;
