import {
  CHANGE_NEW_ORDER_TABLE_DATA,
  DELETE_NEW_ORDER_TABLE_DATA,
  LOAD_NEW_ORDER_TABLE_DATA,
} from '../actions/newOrderTableActions';

const initialState = {
  items: [
    {
      title: 'Nike Air Max',
      quantity: 142,
      sold: 124,
      total: '$ 4 234',
      img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
    },
    {
      title: 'Reebok ZigTech',
      quantity: 98,
      sold: 53,
      total: '$ 1 754',
      img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
    },
    {
      title: 'Puma Suede',
      quantity: 23,
      sold: 21,
      total: '$ 1 572',
      img: `${process.env.PUBLIC_URL}/img/shoes/03.png`,
    },
    {
      title: 'Puma Basket Platform',
      quantity: 2,
      sold: 456,
      total: '$ 989',
      img: `${process.env.PUBLIC_URL}/img/shoes/04.png`,
    },
    {
      title: 'Nike Jordan',
      quantity: 189,
      sold: 42,
      total: '$ 542',
      img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
    },
  ],
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_NEW_ORDER_TABLE_DATA: {
      const loadData = state.items[action.index];
      return { ...state, data: loadData };
    }
    case CHANGE_NEW_ORDER_TABLE_DATA: {
      const updatedItems = [...state.items];
      updatedItems[action.index] = action.data;
      return { ...state, items: updatedItems };
    }
    case DELETE_NEW_ORDER_TABLE_DATA:
      return { ...state, items: action.items };
    default:
      return state;
  }
}
