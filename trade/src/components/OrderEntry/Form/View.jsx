import PropTypes from 'prop-types';
import React from 'react';

import Quantity from 'components/OrderEntry/Form/Quantity';
import QuantityDisclose from 'components/OrderEntry/Form/QuantityDisclose';
import Price from 'components/OrderEntry/Form/Price';
import Leverage from 'components/OrderEntry/Form/Leverage';
import Direction from 'components/OrderEntry/Form/Direction';
import Distance from 'components/OrderEntry/Form/Distance';
import DistanceType from 'components/OrderEntry/Form/DistanceType';

import styles from './styles.css';

const layout = [
  [Price, Distance, DistanceType],
  [Quantity, QuantityDisclose],
  [Leverage, Direction],
];

const OrderEntryForm = ({ form, user }) => (
  <div className={styles.main}>
    {layout.map((row, i1) => (
      <div key={i1} className={styles.row}>
        {row.map((Element, i2) => (
          user.underJFSA && Element === QuantityDisclose ? null : (
            <Element key={i2} className={styles.item} form={form} user={user} />
          )
        ))}
      </div>
    ))}
  </div>
);

OrderEntryForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({
    underJFSA: PropTypes.bool,
  }).isRequired,
};

export default OrderEntryForm;
