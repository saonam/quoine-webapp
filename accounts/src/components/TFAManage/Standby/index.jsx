import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Color from '@quoine/components/Color';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const getStatus = (props) => (
  props.enabled ? 'enabled' : 'not-enabled'
);

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
        ) : (
          <span className={styles.item}>
            <Button onClick={props.goAddPhone}>
              {translate('tfa-manage:add-phone-title')}
            </Button>
          </span>
        )}
      </div>
      <div>
        {props.phone ? (
          <Color styleName="primary-3">
            &nbsp;({translate('tfa-manage:help-change-phone')})
          </Color>
        ) : null}
      </div>

    </div>
  );
};

TFAManageStandby.propTypes = {
  phone: PropTypes.string,
  enabled: PropTypes.bool.isRequired,
  goAddPhone: PropTypes.func.isRequired,
  goToggle: PropTypes.func.isRequired,
};

export default TFAManageStandby;
