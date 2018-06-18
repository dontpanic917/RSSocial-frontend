import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import subscriptionReducer from './subscriptionReducer';
import navReducer from './navReducer';

export default combineReducers({
  user: loginReducer,
  subscriptions: subscriptionReducer,
  nav: navReducer
});
