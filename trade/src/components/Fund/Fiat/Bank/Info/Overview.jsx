import PropTypes from 'prop-types';
import React from 'react';

import Button from '@quoine/components/Button';

const FundInfoOverview = ({ bank }) => (
  <Button styleName="full text accent left">
    {bank['bank-name']}
  </Button>
);

FundInfoOverview.propTypes = {
  bank: PropTypes.shape({}).isRequired,
};

export default FundInfoOverview;
