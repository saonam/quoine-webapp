import React from 'react';

import Button from '@quoine/components/ButtonWLoading';
import Icon from '@quoine/components/Icon';

const WdrItemCancel = ({ withdrawal, confirming, submitting, onCancel }) => (
  <Button
    styleName="icon negative disabled-primary-2"
    busy={submitting.id === withdrawal.id}
    disabled={confirming.id === withdrawal.id}
    onClick={onCancel}
  >
    <Icon glyph="cancel" />
  </Button>
);

WdrItemCancel.propTypes = {
  withdrawal: React.PropTypes.shape({}).isRequired,
  // ===
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  submitting: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  onCancel: React.PropTypes.func.isRequired,
};

export default WdrItemCancel;
