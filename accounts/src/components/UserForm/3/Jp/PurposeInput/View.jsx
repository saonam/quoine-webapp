import PropTypes from 'prop-types';
import React from 'react';

import CheckboxInput from '@quoine/components/CheckboxInput';
import styles from 'components/UserForm/styles.css';


const JpPurposeInputView = ({ value, onChange, required }) => {
  const valid = value.exchange || value.trade || value.diversify || value.invest;

  return (
    <div>
      {!valid && (
        <div className={styles.hidden}>
          <input
            type="text" required defaultValue="0"
            pattern="1" title="4件の中に一件をご選択ください。"
          />
        </div>
      )}
      <CheckboxInput
        id="purpose-exchange" value={value.exchange}
        onChange={onChange.exchange} required={required}
      >
        仮想通貨を購入して、国内外への送金、決済等のため
      </CheckboxInput>
      <CheckboxInput
        id="purpose-trade" value={value.trade}
        onChange={onChange.trade} required={required}
      >
        仮想通貨の価格変動による売買益のため
      </CheckboxInput>
      <CheckboxInput
        id="purpose-diversify" value={value.diversify}
        onChange={onChange.diversify} required={required}
      >
        分散投資をおこなうため
      </CheckboxInput>
      <CheckboxInput
        id="purpose-invest" value={value.invest}
        onChange={onChange.invest} required={required}
      >
        中・長期投資のため
      </CheckboxInput>
    </div>
  );
};

JpPurposeInputView.propTypes = {
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.shape({}).isRequired,
  required: PropTypes.bool,
};

export default JpPurposeInputView;
