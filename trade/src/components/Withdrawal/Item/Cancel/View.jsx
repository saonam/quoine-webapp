import PropTypes from 'prop-types';
import React from 'react';

import Button from '@quoine/components/ButtonWLoading';
import Icon from '@quoine/components/Icon';

const WdrItemCancel = ({ withdrawal, confirming, submitting, onCancel }) => (
  <Button
    styleName="icon negative disabled-primary-2"
    busy={submitting.id === withdrawal.id}
    disabled={confirming && confirming.id === withdrawal.id}
    onClick={onCancel}
  >
    <Icon glyph="cancel" />
  </Button>
);

WdrItemCancel.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
  // ===
  confirming: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]),
  submitting: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default WdrItemCancel;
