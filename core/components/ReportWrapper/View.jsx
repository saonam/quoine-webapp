import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import CheckboxInput from '@quoine/components/CheckboxInput';
import Hint from '@quoine/components/Hint';

import styles from './styles.css';

const ReportWrapperView = (props) => (
  <div className={styles[props.layout]}>

    {props.children ? (
      <div className={styles.item}>
        {props.children}
      </div>
    ) : null}

    <div className={styles.item}>
      <CheckboxInput id={props.id} onChange={props.onToggleSkip} value={props.skip}>
        {translate('confirmation:skip')}
        <span>&nbsp;</span>
        <Hint>{translate('confirmation:skip-hint')}</Hint>
      </CheckboxInput>
    </div>

    <div className={styles.button}>
      <Button
        styleName={`accent-bg ${
          props.layout === 'inline' ? 'inline text' : 'hero'
        }`}
        onClick={props.onDismiss} autoFocus
      >
        {translate('confirmation:dismiss')}
      </Button>
    </div>

  </div>
);

ReportWrapperView.propTypes = {
  children: React.PropTypes.node.isRequired,
  id: React.PropTypes.string.isRequired,
  layout: React.PropTypes.oneOf(['inline', 'hero']).isRequired,
  // ===
  onDismiss: React.PropTypes.func.isRequired,
  // ===
  skip: React.PropTypes.bool.isRequired,
  onToggleSkip: React.PropTypes.func.isRequired,
};

export default ReportWrapperView;
