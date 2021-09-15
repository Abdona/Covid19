import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './home/home';
import detailsReducer from './details/details';

const rootReducer = combineReducers({
  homeReducer,
  detailsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

window.store = store;

export default store;
