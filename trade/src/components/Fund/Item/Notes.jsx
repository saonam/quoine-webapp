import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Color from '@quoine/components/Color';

const FundItemNotes = ({ fund }) => (
  fund.notes ? (
    <span>{fund.notes}</span>
  ) : (
    <Color styleName="primary-3">{translate('fund:notes-none')}</Color>
  )
);

FundItemNotes.propTypes = {
  fund: PropTypes.shape({}).isRequired,
};

export default FundItemNotes;
