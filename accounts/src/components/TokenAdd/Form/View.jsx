import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import CheckboxInput from '@quoine/components/CheckboxInput';

import Row from 'components/SettingsRow';

import styles from './styles.css';

const TokenAddFormView = ({ form, onChange, onSubmit, onCancel }) => (
  <form className={styles.main} onSubmit={onSubmit}>
    <p>
      {translate('token:add-description')}
    </p>
    {Object.keys(form).map(name => (
      <Row key={name} label={translate(`token:name-${name}`)}>
        <div className={styles.name}>
          {Object.keys(form[name]).map(action => (
            <div className={styles.action} key={action}>
              <CheckboxInput
                id={`${name}-${action}`}
                value={form[name][action]} onChange={onChange[name][action]}
              >
                {translate(`token:action-${action}`)}
              </CheckboxInput>
            </div>
          ))}
        </div>
      </Row>
    ))}
    <Row>
      <div className={styles.buttons}>
        <span className={styles.button}>
          <Button type="submit">
            {translate('token:add-action-submit')}
          </Button>
        </span>
        <span className={styles.button}>
          <Button styleName="primary-3 inline text" onClick={onCancel}>
            {translate('token:add-action-cancel')}
          </Button>
        </span>
      </div>
    </Row>
  </form>
);

TokenAddFormView.propTypes = {
  form: React.PropTypes.objectOf(
    React.PropTypes.objectOf(React.PropTypes.bool),
  ).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.objectOf(
    React.PropTypes.objectOf(React.PropTypes.func),
  ).isRequired,
};

export default TokenAddFormView;
