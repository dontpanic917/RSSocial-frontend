import { FETCH_SUBSCRIPTIONS, NEW_SUBSCRIPTION } from '../actions/types';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_SUBSCRIPTIONS:
      return {
        ...state,
        ...action.subscriptions
      };
    case 'POPULATE_SUBSCRIPTION':
      console.log(state)
      const itemMap = action.feed.items.map(
        (item) => ({[item.guid]: item})
      ).reduce(function(result, item) {
          var key = Object.keys(item)[0]; //first property: a, b, c
          result[key] = item[key];
          return result;
        }, {});
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          ...action.feed,
          items: {
            ...state[action.name].items,
            ...itemMap
          }
        }
      }
    case NEW_SUBSCRIPTION:
      console.log(state)
      return {
        ...state,
        newSubscription: action.payload
      };
    default:
      return state;
  }
}
