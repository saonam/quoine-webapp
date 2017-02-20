import React from 'react';

import translate from '@quoine/translate';

import Color from '@quoine/components/Color';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const getStatus = (props) => {
  if (props.enabled) { return 'enabled'; }
  return props.phone ? 'added' : 'none';
};

const TFAManageStandby = (props) => {
  const status = getStatus(props);
  return (
    <div>
      <div>
        <span className={styles.item}>
          <Color styleName="primary-3">
            {`${translate('tfa-manage:title')}: `}
          </Color>
          <Color styleName={status === 'enabled' ? 'positive' : 'negative'}>
            {translate(`tfa-manage:status-${status}`)}
          </Color>
        </span>

        {props.phone ? (
          <span className={styles.item}>
            <Button onClick={props.goToggle}>
              {translate(`tfa-manage:toggle-title-${
                props.enabled ? 'disable' : 'enable'
              }`)}
            </Button>
          </span>
        ) : null}
      </div>
      <div>
        {props.phone ? (
          <span className={styles.item}>
            <Color styleName="primary-3">
              {`${translate('tfa-manage:phone')}: `}
            </Color>
            <span>{props.phone}</span>
          </span>
        ) : null}

        {!props.enabled ? (
          <span className={styles.item}>
            <Button onClick={props.goChange}>
              {translate(`tfa-manage:change-title-${
                props.phone ? 'change' : 'add'
              }`)}
            </Button>
          </span>
        ) : (
          <Color styleName="primary-3">
            &nbsp;({translate('tfa-manage:help-enabled')})
          </Color>
        )}
      </div>

    </div>
  );
};

TFAManageStandby.propTypes = {
  phone: React.PropTypes.string,
  enabled: React.PropTypes.bool.isRequired,
  goChange: React.PropTypes.func.isRequired,
  goToggle: React.PropTypes.func.isRequired,
};

export default TFAManageStandby;
