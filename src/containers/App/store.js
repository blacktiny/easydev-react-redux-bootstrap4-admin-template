import { combineReducers, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  cryptoTableReducer,
  newOrderTableReducer,
  sidebarReducer,
  themeReducer,
  customizerReducer,
  todoReducer,
  rtlReducer,
  authReducer,
} from '../../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  rtl: rtlReducer,
  sidebar: sidebarReducer,
  cryptoTable: cryptoTableReducer,
  newOrder: newOrderTableReducer,
  customizer: customizerReducer,
  todos: todoReducer,
  user: authReducer,
});
const store = createStore(reducer);

export default store;
