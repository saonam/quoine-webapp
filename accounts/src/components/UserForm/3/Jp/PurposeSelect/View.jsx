import React from 'react';

import Checkbox from '@quoine/components/Checkbox';

const JpPurposeSelect = ({ value, onChange }) => (
  <div>
    <Checkbox id="purpose-exchange" value={value.exchange} onChange={onChange.exchange}>
      仮想通貨を購入して、国内外への送金、決済等のため
    </Checkbox>
    <Checkbox id="purpose-trade" value={value.trade} onChange={onChange.trade}>
      仮想通貨の価格変動による売買益のため
    </Checkbox>
    <Checkbox id="purpose-diversify" value={value.diversify} onChange={onChange.diversify}>
      分散投資をおこなうため
    </Checkbox>
    <Checkbox id="purpose-invest" value={value.invest} onChange={onChange.invest}>
      中・長期投資のため
    </Checkbox>

  </div>
);

JpPurposeSelect.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
};

export default JpPurposeSelect;
