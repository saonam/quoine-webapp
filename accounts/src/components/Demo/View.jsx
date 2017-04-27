import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import Modal from '@quoine/components/Modal';

import Step1 from './Step1';
import Step2 from './Step2';

const BackButton = ({ onBack }) => (
  <Button styleName="inverse-light inline" onClick={onBack}>
    ← {translate('sign-in:back')}
  </Button>
);

BackButton.propTypes = {
  onBack: PropTypes.func.isRequired,
};

const getTitle = ({ mode, step }) => {
  if (step === 1) { return translate('demo:title'); }
  if (mode === 'new') { return translate('demo:new-title'); }
  return translate('demo:continue-title');
};

const DemoView = ({ step, mode, onBack, onContinue, onNew }) => (
  <Modal
    isOpen isNoOverlay contentLabel="demo modal"
    title={getTitle({ mode, step })}
    leftButton={step === 2 ? <BackButton onBack={onBack} /> : null}
  >
    {step === 1 ? (
      <Step1 onNew={onNew} onContinue={onContinue} />
    ) : (
      <Step2 mode={mode} />
    )}
  </Modal>
);

DemoView.propTypes = {
  mode: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  onBack: BackButton.propTypes.onBack,
  onNew: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default DemoView;
