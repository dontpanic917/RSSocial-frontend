import { FETCH_SUBSCRIPTIONS, NEW_SUBSCRIPTION } from '../actions/types';

const initialState = {
  activeView: {},
  activeItem: {},
  activeSubscription: false
};

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return {
        ...state,
        ...action.payload
      };
    case NEW_SUBSCRIPTION:
      console.log(state)
      return {
        ...state,
        newSubscription: action.payload
      };
    case 'SET_SUBSCRIPTION_FOCUS':
      return {
        ...state,
        activeSubscription: action.name
      }
    default:
      return state;
  }
}
