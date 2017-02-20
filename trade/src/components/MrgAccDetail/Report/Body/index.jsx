import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoHorizontal';
import ColorByValue from '@quoine/components/ColorByValue';
import Money from '@quoine/components/Money';

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
        <Info label={translate('mrg-acc:position-total')}>
          <Money value={result.position} currency={result.baseCurrency} />
        </Info>
        <Info label={translate('mrg-acc:pnl-total')}>
          <ColorByValue value={result.pnl}>
            <Money value={result.pnl} currency={result.account} />
          </ColorByValue>
        </Info>
      </div>
    ) : null}

  </div>
);

MrgAccDetailReportBody.propTypes = {
  result: React.PropTypes.shape({}),
};

export default MrgAccDetailReportBody;
