import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './home/home';
import detailsReducer from './details/details';
import regionsReducer from './details/regions';

const rootReducer = combineReducers({
  homeReducer,
  regionsReducer,
  detailsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

window.store = store;

export default store;
