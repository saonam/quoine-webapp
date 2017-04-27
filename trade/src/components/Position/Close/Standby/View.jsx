import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const PositionCloseStandby = ({ confirming, position, onOpen, close }) => (
  <Button
    styleName="negative inline text disabled-primary-2"
    onClick={onOpen}
    busy={close.id === position.id}
    disabled={!!confirming}
  >
    {translate('position-close:title')}
  </Button>
);

PositionCloseStandby.propTypes = {
  onOpen: PropTypes.func.isRequired,
  position: PropTypes.shape({}).isRequired,
  close: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  confirming: PropTypes.bool,
};

export default PositionCloseStandby;
