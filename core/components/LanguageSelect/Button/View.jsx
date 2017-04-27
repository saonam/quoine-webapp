import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

const LanguageSelectButton = ({ onClick, language, current }) => (
  <Button
    styleName={`text inline ${
      current === language ? 'accent' : 'primary-3'
    }`}
    disabled={current === language}
    onClick={onClick}
  >
    {translate(`language:${language}`)}
  </Button>
);

LanguageSelectButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default LanguageSelectButton;
