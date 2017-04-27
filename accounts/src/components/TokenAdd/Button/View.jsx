import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

const TokenAddButtonView = ({ onOpen, busy }) => (
  <ButtonWLoading
    styleName="full large block accent text"
    busy={busy} onClick={onOpen}
  >
    {translate('token:add-title')}
  </ButtonWLoading>
);

TokenAddButtonView.propTypes = {
  busy: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default TokenAddButtonView;
