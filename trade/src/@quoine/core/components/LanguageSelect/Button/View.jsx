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
  onClick: React.PropTypes.func.isRequired,
  language: React.PropTypes.string.isRequired,
  current: React.PropTypes.string.isRequired,
};

export default LanguageSelectButton;
