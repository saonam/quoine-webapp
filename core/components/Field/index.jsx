import React from 'react';

import styles from './styles.css';

const ratioRegex = /\b\d:\d\b/;

const combineStyles = ({ layout, modifies, prefix }) => {
  const names = [prefix, layout];
  if (modifies) {
    modifies.split(' ').forEach(item => {
      names.push(`${prefix}-${item}`);
    });
  }
  return names.map(name => styles[name]).join(' ');
}

const Field = ({ label, children, layout, labelStyle, childrenStyle }) => {
  const isRatioLayout = ratioRegex.test(layout);
  const ratios = isRatioLayout ? layout.split(':') : false;

  const mainStyles = styles[`main-${isRatioLayout ? 'ratio' : layout}`];
  const lbStyles = combineStyles({
    layout: isRatioLayout ? `ratio-${ratios[0]}` : `label-${layout}`,
    modifies: labelStyle,
    prefix: 'label',
  });
  const cdStyles = combineStyles({
    layout: isRatioLayout ? `ratio-${ratios[1]}` : `children-${layout}`,
    modifies: childrenStyle,
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
  labelStyle: React.PropTypes.string,
  childrenStyle: React.PropTypes.string,
};

Field.defaultProps = {
  layout: 'default',
};

export default Field;
