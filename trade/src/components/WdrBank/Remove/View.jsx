import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const WdrBankRemove = ({ bank, removing, confirming, onRemove }) => (
  <Button
    styleName="negative text full disabled-primary-2"
    busy={bank.id === removing.id}
    onClick={onRemove}
    disabled={bank.id === confirming.id}
  >
    {translate('bank:remove-action')}
  </Button>
);

WdrBankRemove.propTypes = {
  bank: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }),
  // ===
  removing: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
    }),
  ]).isRequired,
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
    }),
  ]).isRequired,
  onRemove: React.PropTypes.func.isRequired,
};

export default WdrBankRemove;
