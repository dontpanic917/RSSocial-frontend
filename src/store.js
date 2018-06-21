import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle'

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(throttle(() => {
  saveState({
    subscriptions: {
      NYT: store.getState().subscriptions['NYT'],
      'the intercept': store.getState().subscriptions['the intercept'],
      'Brooklyn Vegan': store.getState().subscriptions['Brooklyn Vegan']
    }
  });
}, 1000))
export default store;
