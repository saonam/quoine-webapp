import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Color from '@quoine/components/Color';

const TFAStatus = ({ tfa }) => (
  <Field layout="inline" label={translate('tfa-manage:status')}>
    <Color styleName={`${tfa ? 'positive' : 'negative'}`}>
      {translate(`tfa-manage:status-${tfa ? 'enabled' : 'disabled'}`)}
    </Color>
  </Field>
);

TFAStatus.propTypes = {
  tfa: PropTypes.bool.isRequired,
};

export default TFAStatus;
