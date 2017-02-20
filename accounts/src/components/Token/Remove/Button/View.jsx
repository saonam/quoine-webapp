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
  removing: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
  ]).isRequired,
  onRemove: React.PropTypes.func.isRequired,
  token: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default TokenRemoveButton;
