import React from 'react';

import translate from '@quoine/translate';

const UserInfoPteIndiIncome = ({ info, Item }) => (
  <div>
    {info.income === 'employed' ? (
      <Item label={translate('sign-up-pi:income-job')}>
        {info.incomeJob}
      </Item>
    ) : null}

    {info.income === 'self-employed' ? (
      <div>
        <Item label={translate('sign-up-pi:income-business-name')}>
          {info.incomeBusinessName}
        </Item>
        <Item label={translate('sign-up-pi:income-business-type')}>
          {info.incomeBusinessType}
        </Item>
      </div>
    ) : null}

    {info.income === 'other' ? (
      <Item label={translate('sign-up-pi:income-detail')}>
        {info.incomeDetail}
      </Item>
    ) : null}

  </div>
);

UserInfoPteIndiIncome.propTypes = {
  info: React.PropTypes.shape({}).isRequired,
  Item: React.PropTypes.func.isRequired,
};

export default UserInfoPteIndiIncome;
