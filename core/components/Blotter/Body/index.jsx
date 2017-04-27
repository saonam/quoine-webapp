import PropTypes from 'prop-types';
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
  Item: PropTypes.func.isRequired,
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      keys: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ])
      ).isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  horizontal: PropTypes.bool,
};

export default BlotterBody;
