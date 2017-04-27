import PropTypes from 'prop-types';
import React from 'react';

const UserInfoExperience = ({ experience, Item }) => (
  <div>
    <Item label="FX・CFD取引">
      {experience.fx}
    </Item>
    <Item label="現物株式">
      {experience.stocks}
    </Item>
    <Item label="信用株式">
      {experience.margin}
    </Item>
    <Item label="先物オプション">
      {experience.option}
    </Item>
    <Item label="商品先物">
      {experience.commodities}
    </Item>
  </div>
);

UserInfoExperience.propTypes = {
  experience: PropTypes.shape({}).isRequired,
  Item: PropTypes.func.isRequired,
};

export default UserInfoExperience;
