import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Hint from '@quoine/components/Hint';

import styles from './styles.css';

/* eslint-disable react/prop-types */
const getLabel = ({ id, hintStyle }) => (
  hintStyle ? (
    <span>
      {translate(`order:${id}`)}
      <span>&nbsp;</span>
      <Hint style={hintStyle}>
        <p
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: translate(`order:${id}-help`),
          }}
        />
      </Hint>
    </span>
  ) : (
    translate(`order:${id}`)
  )
);
/* eslint-enable react/prop-types */

const OrderEntryFormField = ({ id, hintStyle, children }) => (
  <Field label={getLabel({ id, hintStyle })} labelStyle="uppercase semi-bold">
    <div className={styles.children}
      {children}
    </div>
  </Field>
);

OrderEntryFormField.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  hintStyle: React.PropTypes.shape({
    width: React.PropTypes.number.isRequired,
    left: React.PropTypes.number.isRequired,
  }),
};

export default OrderEntryFormField;
