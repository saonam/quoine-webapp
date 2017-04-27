import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const VolumeReportView = ({ busy, success, onSubmit, onSuccessDismiss }) => (
  success ? (
    <div>
      <p className={styles.success}>
        {translate('volume:report-success')}
      </p>
      <Button
        styleName="text block full large accent"
        onClick={onSuccessDismiss}
      >
        {translate('volume:report-dismiss')}
      </Button>
    </div>
  ) : (
    <ButtonWLoading
      styleName="text full large accent"
      busy={busy}
      onClick={onSubmit}
    >
      {translate('volume:report-action')}
    </ButtonWLoading>
  )
);

VolumeReportView.propTypes = {
  busy: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSuccessDismiss: PropTypes.func.isRequired,
};

export default VolumeReportView;
