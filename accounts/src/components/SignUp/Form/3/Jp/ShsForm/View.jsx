import React from 'react';

import Button from '@quoine/components/Button';
import Input from '@quoine/components/Input';

import styles from 'components/SignUp/Form/styles.css';

import Item from '../ShForm';

const ShsForm = ({ value, onAdd, onRemove, onChange }) => (
  <div>
    {value.map((item, index) => (
      <div key={index} className={styles.input}>
        <Item
          index={index} value={item}
          onChange={onChange} onRemove={onRemove}
        />
      </div>
    ))}

    {value.length < 3 ? (
      <div className={styles.input}>
        <Input large noBorder>
          <Button styleName="full text accent-bg" onClick={onAdd}>
            実質的支配者の追加
          </Button>
        </Input>
      </div>
    ) : null}

  </div>
);

ShsForm.propTypes = {
  value: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  onAdd: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default ShsForm;
