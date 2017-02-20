import React from 'react';

import Carousel from '@quoine/components/Carousel';
import Header from '@quoine/components/Header';

import Button from 'components/OrderEntry/Form/Type';

import translate from '@quoine/translate';

import styles from './styles.css';

const OrderEntryHeader = ({ form, activity }) => {
  const { confirming, reporting } = activity;
  if (confirming || reporting) {
    return (
      <Header styleName="text center accent">
        {translate(`order-add:${confirming ? 'confirm' : 'report'}-title`)}
      </Header>
    );
  }
  return (
    <Header styleName="accent" className={styles.main}>
      <Carousel height={2} styleName="inverse-light">
        <div className={styles.buttons}>
          <Button form={form} value="limit" />
          <Button form={form} value="market" />
          {form.market !== 'futures' ? (
            <Button form={form} value="stop" />
          ) : null}
          {form.market !== 'futures' ? (
            <Button form={form} value="trailing-stop" />
          ) : null}
        </div>
      </Carousel>
    </Header>
  );
};

OrderEntryHeader.propTypes = {
  form: React.PropTypes.shape({
    market: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }).isRequired,
  activity: React.PropTypes.shape({}).isRequired,
};

export default OrderEntryHeader;
