import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Hint from '@quoine/components/Hint';

import styles from './styles.css';


const Label = ({ id, hintStyle, ...others }) => (
  <h1 className={styles.label}>
    {translate(`order:${id}`)}
    {hintStyle ? <span>&nbsp;</span> : null}
    {hintStyle ? (
      <Hint style={hintStyle} {...others}>
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
  id: PropTypes.string.isRequired,
  hintStyle: PropTypes.shape({
    width: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
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
  children: PropTypes.node.isRequired,
};

export default OrderEntryFormField;
