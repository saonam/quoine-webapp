import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

const styleNameSurfix = {
  yes: {
    hero: 'hero accent-bg',
    box: 'text full inline accent-bg',
    inline: 'text inline accent-bg',
  },
  no: {
    hero: 'full large text primary-3-bg',
    box: 'text full inline primary-3-bg',
    inline: 'text inline primary-3-bg',
  },
};

const ConfirmWrapperButton = (props) => {
  const isYes = props.side === 'yes';

  let styleName = isYes ? props.yesStyleName : props.noStyleName;
  styleName = styleName || styleNameSurfix[props.side][props.layout];

  const onClick = isYes ? props.onYes : props.onNo;

  let label = isYes ? props.yesLabel : props.noLabel;
  label = label || translate(`confirmation:${props.side}`);

  return (
    <Button styleName={styleName} onClick={onClick} autoFocus={isYes}>
      {label}
    </Button>
  );
};

ConfirmWrapperButton.propTypes = {
  layout: React.PropTypes.oneOf(['inline', 'hero', 'box']).isRequired,
  // ===
  yesStyleName: React.PropTypes.string,
  yesLabel: React.PropTypes.string,
  onYes: React.PropTypes.func.isRequired,
  // ===
  noStyleName: React.PropTypes.string,
  noLabel: React.PropTypes.string,
  onNo: React.PropTypes.func.isRequired,
  // ===
  side: React.PropTypes.oneOf(['yes', 'no']),
};

export default ConfirmWrapperButton;
