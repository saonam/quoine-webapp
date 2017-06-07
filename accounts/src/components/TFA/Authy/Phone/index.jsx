import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Color from '@quoine/components/Color';

const TFAPhone = ({ phone }) => (
  <div>
    <Field layout="inline" label={translate('tfa-phone:phone')}>
      {phone}
    </Field>
    <Color styleName="primary-3">
      ({translate('tfa-phone:help-change-phone')})
    </Color>
  </div>
);

TFAPhone.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default TFAPhone;
