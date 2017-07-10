import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

const IpRemoveButton = ({ removing, ip, onRemove }) => (
  <ButtonWLoading
    styleName="negative inline text" onClick={onRemove}
    busy={removing === ip.id}
  >
    {translate('ip:remove-button')}
  </ButtonWLoading>
);

IpRemoveButton.propTypes = {
  removing: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  onRemove: PropTypes.func.isRequired,
  ip: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default IpRemoveButton;
