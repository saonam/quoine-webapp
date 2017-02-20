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
  onOpen: React.PropTypes.func.isRequired,
  position: React.PropTypes.shape({}).isRequired,
  Element: React.PropTypes.func.isRequired,
  target: React.PropTypes.string.isRequired,
  edit: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
};

export default PositionEditStandby;
