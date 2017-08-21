import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Button from '@quoine/components/Button';

import Info from 'components/TFA/Info';
import GA from 'components/TFA/GA';
import Authy from 'components/TFA/Authy';

const TFAManageView = ({
  busy, tfa, app, phone,
  onToggleForm, onUpdatePhone, onUpdateTfa,
}) => {
  if (busy) { return (<Loading />); }

  const App = app === 'ga' ? GA : Authy;
  return (
    <div>
      <Info tfa={tfa} app={app} />

      {!tfa && !app ? (
        <Button
          styleName="text accent inline"
          onClick={onToggleForm}
        >
          {translate(`tfa-manage:action-${app ? 'cancel' : 'enable'}`)}
        </Button>
      ) : null}

      {app ? (
        <App {...{ tfa, onUpdateTfa, phone, onUpdatePhone, onToggleForm }} />
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
  onToggleForm: PropTypes.func.isRequired,
  onUpdatePhone: PropTypes.func.isRequired,
  onUpdateTfa: PropTypes.func.isRequired,
};

export default TFAManageView;
