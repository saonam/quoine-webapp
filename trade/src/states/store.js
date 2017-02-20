import { createStore } from '@quoine/states/utils';

import languages from '@quoine/states/languages';
import themes from '@quoine/states/themes';
import user from '@quoine/states/user';
import accounts from '@quoine/states/accounts';
import currencies from '@quoine/states/currencies';
import interestBook from '@quoine/states/interestBook';
import tabs from '@quoine/states/tabs';
import confirmations from '@quoine/states/confirmations';

import trading from 'states/trading';
import products from 'states/products';
import mrgAccs from 'states/mrgAccs';
import tradeFeed from 'states/tradeFeed';
import orderBook from 'states/orderBook';
import futures from 'states/futures';
import panels from 'states/panels';
import orderEntry from 'states/orderEntry';
import charts from 'states/charts';

import wdrBank from 'states/wdrBank';
import withdrawal from 'states/withdrawal';

import orderBlotter from 'states/orderBlotter';
import positionBlotter from 'states/positionBlotter';
import executionBlotter from 'states/executionBlotter';
import transBlotter from 'states/transBlotter';

import orderItem from 'states/orderItem';
import positionItem from 'states/positionItem';

const states = {
  languages,
  themes,
  user,
  accounts,
  currencies,
  interestBook,
  tabs,
  confirmations,

  trading,
  products,
  mrgAccs,
  tradeFeed,
  orderBook,
  futures,
  panels,
  orderEntry,
  charts,

  wdrBank,
  withdrawal,

  orderBlotter,
  positionBlotter,
  executionBlotter,
  transBlotter,

  orderItem,
  positionItem,
};

export default createStore(states);
