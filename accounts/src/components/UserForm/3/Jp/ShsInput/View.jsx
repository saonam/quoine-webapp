import React from 'react';

import Button from '@quoine/components/Button';

import LargeField from 'components/LargeField';
import styles from 'components/UserForm/styles.css';

import Item from '../ShInput';

const ShsInputView = ({ value, onAdd, onRemove, onChange, ...others }) => (
  <div>
    {value.map((item, index) => (
      <div key={index} className={styles.input}>
        <Item
          index={index} value={item}
          onChange={onChange} onRemove={onRemove}
          {...others}
        />
      </div>
    ))}

    {value.length < 3 ? (
      <div className={styles.input}>
        <LargeField>
          <Button styleName="full text accent-bg" onClick={onAdd}>
            実質的支配者の追加
          </Button>
        </LargeField>
      </div>
    ) : null}

  </div>
);

ShsInputView.propTypes = {
  value: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  onAdd: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default ShsInputView;
