import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

const IpAddButtonView = ({ onOpen, busy }) => (
  <ButtonWLoading
    styleName="full large block accent text"
    busy={busy} onClick={onOpen}
  >
    {translate('ip:add-title')}
  </ButtonWLoading>
);

IpAddButtonView.propTypes = {
  busy: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default IpAddButtonView;
