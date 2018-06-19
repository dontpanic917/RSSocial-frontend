import { ARTICLE_FOCUS, MODAL_TOGGLE, SET_ACTIVE_ITEM, SET_SUBSCRIPTION_FOCUS } from './types';
import { populateSubscriptions } from '../actions/subscriptionActions';

export const setMenuFocus = (menuItem) => (dispatch , getState) => {
  const {activeItem} = getState().nav
  activeItem === menuItem
  ? dispatch({ type: SET_ACTIVE_ITEM, payload: {activeItem: null} })
  : dispatch({ type: SET_ACTIVE_ITEM, payload: {activeItem: menuItem} })
}

export const setSubscriptionFocus = (subscriptionID) => (dispatch) => {
  dispatch(populateSubscriptions(subscriptionID))
  dispatch({type: SET_SUBSCRIPTION_FOCUS, subscriptionID})
}

export const openArticle = (subscriptionID, guid) => (dispatch,getState) => {
  const focusedArticle = getState().subscriptions[subscriptionID].items[guid]
  dispatch(articleFocus(focusedArticle))
  dispatch(modalToggle(true))
}

export const closeArticle = () => (dispatch) => {
  dispatch(articleFocus(false))
  dispatch(modalToggle(false))
}

export const articleFocus = (article) => (dispatch) => {
  dispatch({type: ARTICLE_FOCUS, article: article})
}

export const modalToggle = (status) => (dispatch) => {
  dispatch({type: MODAL_TOGGLE, modalStatus: status })
}
