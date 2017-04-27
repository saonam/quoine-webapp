import PropTypes from 'prop-types';
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
  onOpen: PropTypes.func.isRequired,
  order: PropTypes.shape({}).isRequired,
  Element: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  edit: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
};

export default OrderEditStandby;
