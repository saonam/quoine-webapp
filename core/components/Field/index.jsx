import React from 'react';

import styles from './styles.css';

const ratioRegex = /\b\d:\d\b/;

const combineStyles = ({ layout, prefix }) => {
  const names = [prefix, layout];
  return names.map(name => styles[name]).join(' ');
};

const Field = ({ label, children, layout }) => {
  const isRatioLayout = ratioRegex.test(layout);
  const ratios = isRatioLayout ? layout.split(':') : false;

  const mainStyles = styles[`main-${isRatioLayout ? 'ratio' : layout}`];
  const lbStyles = combineStyles({
    layout: isRatioLayout ? `ratio-${ratios[0]}` : `label-${layout}`,
    prefix: 'label',
  });
  const cdStyles = combineStyles({
    layout: isRatioLayout ? `ratio-${ratios[1]}` : `children-${layout}`,
    prefix: 'children',
  });

  return (
    <div className={mainStyles}>
      <div className={lbStyles}>
        {label}
      </div>
      <div className={cdStyles}>
        {children}
      </div>
    </div>
  );
};

Field.propTypes = {
  label: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
  layout: React.PropTypes.oneOf([
    'default',
    'inline',
    '1:1', '1:2', '1:3',
    'justify',
    'reverse',
  ]).isRequired,
};

Field.defaultProps = {
  layout: 'default',
};

export default Field;
