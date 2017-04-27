import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const WdrBankRemove = ({ bank, removing, confirming, onRemove }) => (
  <Button
    styleName="negative text full disabled-primary-2"
    busy={bank.id === removing.id}
    onClick={onRemove}
    disabled={confirming && confirming.id === bank.id}
  >
    {translate('bank:remove-action')}
  </Button>
);

WdrBankRemove.propTypes = {
  bank: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
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

export default WdrBankRemove;
