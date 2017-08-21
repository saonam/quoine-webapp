import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const WdrAddressRemove = ({ address, removing, confirming, onRemove }) => (
  <Button
    styleName="negative text full disabled-primary-2"
    busy={address.id === removing.id}
    onClick={onRemove}
    disabled={confirming && confirming.id === address.id}
  >
    {translate('wdr-address:remove-action')}
  </Button>
);

WdrAddressRemove.propTypes = {
  address: PropTypes.shape({}).isRequired,
  // ===
  removing: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ]).isRequired,
  confirming: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ]),
  onRemove: PropTypes.func.isRequired,
};

export default WdrAddressRemove;
