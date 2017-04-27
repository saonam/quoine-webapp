import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

const TokenRemoveButton = ({ removing, token, onRemove }) => (
  <ButtonWLoading
    styleName="negative inline text" onClick={onRemove}
    busy={removing === token.id}
  >
    {translate('token:remove-title')}
  </ButtonWLoading>
);

TokenRemoveButton.propTypes = {
  removing: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  onRemove: PropTypes.func.isRequired,
  token: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default TokenRemoveButton;
