import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import Checkbox from '@quoine/components/Checkbox';
import Button from '@quoine/components/ButtonWLoading';

import Err from 'components/UserForm/Err';

import styles from 'components/UserForm/styles.css';

const UserForm4 = ({ onSubmit, form, onChange, busy, error }) => (
  <form onSubmit={onSubmit}>

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large id="referral" label={translate('sign-up:referral')}>
          <TextBox autoFocus type="text" value={form.referral} onChange={onChange.referral} />
        </Input>
      </div>

      <div className={styles.input}>
        <Checkbox id="term" value={form.term} onChange={onChange.term} required>
          <span
            className={styles.term}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate(`sign-up:term-${
                process.env.REACT_APP_VENDOR
              }`),
            }}
          />
        </Checkbox>
      </div>

    </div>

    <Err error={error} />

    <div className={styles.input}>
      <Button busy={busy} type="submit" styleName="modal accent">
        {translate('sign-up:action-next')}
      </Button>
    </div>

  </form>
);

UserForm4.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
  ...Err.propTypes,
};

export default UserForm4;
