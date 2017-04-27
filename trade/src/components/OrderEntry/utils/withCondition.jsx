import PropTypes from 'prop-types';
import React from 'react';

const validPriceTypes = ['limit', 'stop'];

const conditions = {
  direction: form => (form.market === 'margin'),
  quantityDisclose: form => (
    form.type === 'limit' && form.market !== 'futures'
  ),
  distance: form => (form.type === 'trailing-stop'),
  distanceType: form => (form.type === 'trailing-stop'),
  leverage: form => (form.market === 'margin'),
  price: form => (validPriceTypes.indexOf(form.type) !== -1),
  quantity: () => (true),
};

const withCondition = (View, propName) => {
  const condition = conditions[propName];
  const Container = ({ className, form, ...others }) => (
    condition(form) ? (
      <div className={className}>
        <View form={form} {...others} />
      </div>
    ) : null
  );
  Container.propTypes = {
    className: PropTypes.string,
    form: PropTypes.shape({}).isRequired,
  };
  return Container;
};

export default withCondition;
