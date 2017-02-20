import React from 'react';

import MoveButton from './MoveButton';
import ResizeButton from './ResizeButton';
import SpineButton from './SpineButton';

import styles from './styles.css';

const PanelsView = ({ state, Elements, hover, onEnter, onLeave }) => (
  <div className={styles.main}>
    {Elements.map((info, index) => {
      const panel = {
        ...state.prefs[index],
        ...state.constraints[index],
        ...Elements[index],
        index,
      };
      const { Cover, order } = panel;
      const className = `${
        styles[panel.grow > 0 ? 'auto' : 'fix']
      } ${
        styles[panel.transparent ? 'transparent' : '']
      }`;
      return (
        <div key={index} className={className} style={{ order }}>
          <div
            className={styles.buttons}
            onMouseEnter={onEnter} onMouseLeave={onLeave}
          >
            <MoveButton panel={panel} side="left" />
            <ResizeButton hover={hover} panel={panel} side="expand" />
            <ResizeButton hover={hover} panel={panel} side="collapse" />
            <MoveButton panel={panel} side="right" />
          </div>
          <div className={styles.element}>
            {panel.grow === panel.minGrow ? (
              <SpineButton panel={panel} />
            ) : (
              <Cover grow={panel.grow} />
            )}
          </div>
        </div>
      );
    })}
  </div>
);

PanelsView.propTypes = {
  state: React.PropTypes.shape({
    prefs: React.PropTypes.array.isRequired,
    constraints: React.PropTypes.array.isRequired,
  }).isRequired,
  Elements: React.PropTypes.arrayOf(React.PropTypes.shape({
    Cover: React.PropTypes.func.isRequired,
    Spine: React.PropTypes.func.isRequired,
  })).isRequired,
  onEnter: React.PropTypes.func.isRequired,
  onLeave: React.PropTypes.func.isRequired,
  hover: React.PropTypes.bool.isRequired,
};

export default PanelsView;
