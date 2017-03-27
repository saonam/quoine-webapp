import React from 'react';

// import translate from '@quoine/translate';
import Button from '@quoine/components/Button';

const TabsButtonView = ({ panel, current, onSelect }) => {
  let styleName = 'full ';
  const selected = panel.id === current.id;
  if (selected) {
    styleName += current.color ? 'inverse' : 'primary-4';
  } else {
    styleName += current.color ? 'inverse-light' : 'primary-3';
  }
  return (
    <Button
      styleName={styleName}
      onClick={onSelect}
      disabled={selected}
    >
      {panel.label}
    </Button>
  );
};

TabsButtonView.propTypes = {
  panel: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
  }).isRequired,
  current: React.PropTypes.shape({}).isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

export default TabsButtonView;
