import { FETCH_BOOKMARKS, NEW_BOOKMARK } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKMARKS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_BOOKMARK:
      console.log(state)
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
