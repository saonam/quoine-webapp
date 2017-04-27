import PropTypes from 'prop-types';
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
  state: PropTypes.shape({
    prefs: PropTypes.array.isRequired,
    constraints: PropTypes.array.isRequired,
  }).isRequired,
  Elements: PropTypes.arrayOf(PropTypes.shape({
    Cover: PropTypes.func.isRequired,
    Spine: PropTypes.func.isRequired,
  })).isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  hover: PropTypes.bool.isRequired,
};

export default PanelsView;
