import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Field from '@quoine/components/Field';

import Status from 'components/TFA/Status';
import GA from 'components/TFA/GA';
import Authy from 'components/TFA/Authy';
import AppSelect from './AppSelect';

const TFAManageView = ({
  busy, tfa, app, phone,
  onSelectApp, onUpdatePhone, onToggleTfa,
}) => {
  if (busy) { return (<Loading />); }

  const App = app === 'ga' ? GA : Authy;
  return (
    <div>
      <Status tfa={tfa} />
      {tfa ? (
        <Field layout="inline" label={translate('tfa-manage:app')}>
          {translate(`tfa-manage:app-${app}`)}
        </Field>
      ) : (
        <AppSelect current={app} onSelect={onSelectApp} />
      )}
      {app ? (
        <App {...{ tfa, onToggleTfa, phone, onUpdatePhone }} />
      ) : null}
    </div>
  );
};

TFAManageView.propTypes = {
  busy: PropTypes.bool.isRequired,
  tfa: PropTypes.bool.isRequired,
  app: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  // ==
  onSelectApp: PropTypes.func.isRequired,
  onUpdatePhone: PropTypes.func.isRequired,
  onToggleTfa: PropTypes.func.isRequired,
};

export default TFAManageView;
