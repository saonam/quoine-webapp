import React from 'react';

import Button from '@quoine/components/ButtonWLoading';
import Icon from '@quoine/components/Icon';

const OrderEditStandby = ({ Element, order, onOpen, target, edit }) => (
  <span>
    <Element order={order} />
    <Button
      styleName="icon primary-3" onClick={onOpen}
      busy={edit.id === order.id && edit.target === target}
    >
      <Icon glyph="edit" />
    </Button>
  </span>
);

OrderEditStandby.propTypes = {
  onOpen: React.PropTypes.func.isRequired,
  order: React.PropTypes.shape({}).isRequired,
  Element: React.PropTypes.func.isRequired,
  target: React.PropTypes.string.isRequired,
  edit: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
};

export default OrderEditStandby;
