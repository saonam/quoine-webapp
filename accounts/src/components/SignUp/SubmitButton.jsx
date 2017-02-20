import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

const SubmitButton = ({ step, busy }) => (
  <ButtonWLoading
    type="submit" busy={busy} styleName="modal accent"
  >
    {translate(step === 4 ? 'sign-up:action-done' : 'sign-up:action-next')}
  </ButtonWLoading>
);

SubmitButton.propTypes = {
  step: React.PropTypes.number.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default SubmitButton;
