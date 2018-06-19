import { ARTICLE_FOCUS, MODAL_TOGGLE, SET_ACTIVE_ITEM, SET_SUBSCRIPTION_FOCUS, NEW_SUBSCRIPTION } from '../actions/types';

const initialState = {
  activeView: {},
  activeItem: {},
  activeSubscription: false,
  activeArticle: false,
  modalStatus: false
};

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case SET_ACTIVE_ITEM:
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
    case SET_SUBSCRIPTION_FOCUS:
      return {
        ...state,
        activeSubscription: action.subscriptionID
      }
    case MODAL_TOGGLE:
      return {
        ...state,
        modalStatus: action.modalStatus
      }
    case ARTICLE_FOCUS:

      return {
        ...state,
        activeArticle: action.article
      }
    default:
      return state;
  }
}
