import {
  CHANGE_CRYPTO_TABLE_DATA,
  DELETE_CRYPTO_TABLE_DATA,
  LOAD_CRYPTO_TABLE_DATA,
} from '../actions/cryptoTableActions';

const initialState = {
  items: [
    {
      name: 'Bitcoin',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'btc',
    },
    {
      name: 'Ethereum',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'eth',
    },
    {
      name: 'Ripple',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'xrp',
    },
    {
      name: 'Bitcoin Cash',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'bch',
    },
    {
      name: 'Eos',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'eos',
    },
    {
      name: 'Litecoin',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'ltc',
    },
    {
      name: 'Cardano',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'ada',
    },
    {
      name: 'Stellar',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'xlm',
    },
    {
      name: 'IOTA',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'iota',
    },
    {
      name: 'NEO',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'neo',
    },
  ],
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CRYPTO_TABLE_DATA: {
      const loadData = state.items[action.index];
      return { ...state, data: loadData };
    }
    case CHANGE_CRYPTO_TABLE_DATA: {
      const updatedItems = [...state.items];
      updatedItems[action.index] = action.data;
      return { ...state, items: updatedItems };
    }
    case DELETE_CRYPTO_TABLE_DATA:
      return { ...state, items: action.items };
    default:
      return state;
  }
}
