import PropTypes from 'prop-types';
import React from 'react';

import Button from '@quoine/components/ButtonWLoading';
import Icon from '@quoine/components/Icon';

const PositionEditStandby = ({ Element, position, onOpen, target, edit }) => (
  <span>
    <Element position={position} />
    <Button
      styleName="icon primary-3" onClick={onOpen}
      busy={edit.id === position.id && edit.target === target}
    >
      <Icon glyph="edit" />
    </Button>
  </span>
);

PositionEditStandby.propTypes = {
  onOpen: PropTypes.func.isRequired,
  position: PropTypes.shape({}).isRequired,
  Element: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  edit: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
};

export default PositionEditStandby;
