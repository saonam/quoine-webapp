import React from 'react';

import Item from '../Item';

const SignUpBody4JpReviewExperience = ({ experience }) => (
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

SignUpBody4JpReviewExperience.propTypes = {
  experience: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewExperience;
