import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const buttonStyleName = {
  inline: 'accent-bg inline text',
  hero: 'accent-bg full large text',
  box: 'accent-bg inline text',
};

const ErrWrapper = ({ onDismiss, message, layout }) => (
  <div className={styles[layout]}>
    <p className={styles.message}>
      {translate(message)}
    </p>
    <div className={styles.button}>
      <Button
        styleName={buttonStyleName[layout]} onClick={onDismiss} autoFocus
      >
        {translate('confirmation:dismiss')}
      </Button>
    </div>
  </div>
);

ErrWrapper.propTypes = {
  message: React.PropTypes.string.isRequired,
  onDismiss: React.PropTypes.func.isRequired,
  layout: React.PropTypes.oneOf(['inline', 'hero', 'box']).isRequired,
};

export default ErrWrapper;
