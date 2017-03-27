import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Hint from '@quoine/components/Hint';

import styles from './styles.css';

const Label = ({ id, hintStyle }) => (
  <h1 className={styles.label}>
    {translate(`order:${id}`)}
    {hintStyle ? <span>&nbsp;</span> : null}
    {hintStyle ? (
      <Hint style={hintStyle}>
        <p
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: translate(`order:${id}-help`),
          }}
        />
      </Hint>
    ) : null}
  </h1>
);

Label.propTypes = {
  id: React.PropTypes.string.isRequired,
  hintStyle: React.PropTypes.shape({
    width: React.PropTypes.number.isRequired,
    left: React.PropTypes.number.isRequired,
  }),
};

const OrderEntryFormField = ({ children, ...others }) => (
  <Field label={<Label {...others} />}>
    <div className={styles.children}>
      {children}
    </div>
  </Field>
);

OrderEntryFormField.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default OrderEntryFormField;
