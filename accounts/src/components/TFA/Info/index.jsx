import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Color from '@quoine/components/Color';

import Status from 'components/TFA/Status';

const TFAInfo = ({ tfa, app }) => (
  <div>
    {app === 'authy' ? (
      <Color styleName="negative">
        {translate('tfa-manage:authy-warning')}
      </Color>
    ) : null}
    <Status tfa={tfa} />
    {app ? (
      <Field layout="inline" label={translate('tfa-manage:app')}>
        {translate(`tfa-manage:app-${app}`)}
      </Field>
    ) : null}
  </div>
);

TFAInfo.propTypes = {
  tfa: PropTypes.bool.isRequired,
  app: PropTypes.string.isRequired,
};

export default TFAInfo;
