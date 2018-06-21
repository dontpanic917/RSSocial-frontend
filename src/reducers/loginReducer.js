import { LOGIN } from '../actions/types';

const initialState = {
  user_id: false,
  username: false,
  token: false
}
export default function(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
