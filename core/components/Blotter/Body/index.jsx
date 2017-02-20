import React from 'react';
import TransitionGroup from '@quoine/components/TransitionGroup';

import styles from './styles.css';

const BlotterBody = ({ collection, Item, horizontal }) => (
  <div>
    {collection.map(group => (
      <section key={group.date}>
        <h1 className={styles.heading}>{group.date}</h1>
        <TransitionGroup>
          {group.keys.map(key =>
            <div key={key} className={styles.item}>
              <Item id={key} horizontal={horizontal} />
            </div>
          )}
        </TransitionGroup>
      </section>
    ))}
  </div>
);

BlotterBody.propTypes = {
  Item: React.PropTypes.func.isRequired,
  collection: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      keys: React.PropTypes.arrayOf(
        React.PropTypes.oneOfType([
          React.PropTypes.number,
          React.PropTypes.string,
        ])
      ).isRequired,
      date: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  horizontal: React.PropTypes.bool,
};

export default BlotterBody;
