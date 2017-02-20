import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

// this is a little long because we try to avoid break the translation key
const getCaption = (sent) => {
  if (sent) {
    return translate('forgot-password:action-resend');
  }
  return translate('forgot-password:action-send');
};

const SubmitButton = ({ sent, busy }) => (
  <ButtonWLoading
    type="submit" busy={busy} styleName="modal accent"
  >
    {getCaption(sent)}
  </ButtonWLoading>
);

SubmitButton.propTypes = {
  sent: React.PropTypes.bool.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default SubmitButton;
