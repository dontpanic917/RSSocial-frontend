import { CLEAR_STATE, ADD_SUBSCRIPTION, FETCH_SUBSCRIPTIONS, NEW_SUBSCRIPTION, POPULATE_SUBSCRIPTION } from '../actions/types';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_SUBSCRIPTIONS:
      return {
        ...action.subscriptions,
        ...state
      };
    case POPULATE_SUBSCRIPTION:
      console.log(state)
      const itemMap = action.feed.items.map(
        (item) => ({[item.guid]: item})
      ).reduce(function(result, item) {
          var key = Object.keys(item)[0];
          result[key] = item[key];
          return result;
        }, {});
      return {
        ...state,
        [action.subscriptionID]: {
          ...state[action.subscriptionID],
          ...action.feed,
          items: {
            ...state[action.subscriptionID].items,
            ...itemMap
          }
        }
      }
    case ADD_SUBSCRIPTION:
      console.log(state)
      return {
        ...state,
        ...action.subscription
      };
      // case CLEAR_STATE:
      //   return {
      //     ...action.payload
      //   }
    default:
      return state;
  }
}
