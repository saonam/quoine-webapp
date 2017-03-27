import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

const LoadButton = ({ onLoad, busy, page }) => (
  <Button
    styleName="accent full text large disabled-primary-2"
    onClick={onLoad}
    busy={busy}
    disabled={page === Infinity}
  >
    {translate(`blotter:${page === Infinity ? 'loaded' : 'load'}`)}
  </Button>
);

LoadButton.propTypes = {
  onLoad: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
  page: React.PropTypes.number.isRequired,
};

export default LoadButton;
