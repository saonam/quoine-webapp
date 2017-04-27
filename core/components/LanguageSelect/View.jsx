import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';

const LanguageSelect = ({ all }) => (
  <div>
    {all.map(language => (
      <Button language={language} key={language} />
    ))}
  </div>
);

LanguageSelect.propTypes = {
  all: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LanguageSelect;
