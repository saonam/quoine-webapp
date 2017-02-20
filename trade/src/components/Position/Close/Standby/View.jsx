import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const PositionCloseStandby = ({ confirming, position, onOpen, close }) => (
  <Button
    styleName="negative inline text disabled-primary-2"
    onClick={onOpen}
    busy={close.id === position.id}
    disabled={confirming}
  >
    {translate('position-close:title')}
  </Button>
);

PositionCloseStandby.propTypes = {
  onOpen: React.PropTypes.func.isRequired,
  position: React.PropTypes.shape({}).isRequired,
  close: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  confirming: React.PropTypes.bool.isRequired,
};

export default PositionCloseStandby;
