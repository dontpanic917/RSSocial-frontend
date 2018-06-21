import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import subscriptionReducer from './subscriptionReducer';
import navReducer from './navReducer';

const appReducer = combineReducers({
  user: loginReducer,
  subscriptions: subscriptionReducer,
  nav: navReducer
});
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}
export default rootReducer
