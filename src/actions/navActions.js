import { populateSubscriptions } from '../actions/subscriptionActions';

export const setMenuFocus = (e, {name}) => (dispatch , getState) => {
  const {activeItem} = getState().nav
  activeItem === name
    ? dispatch({ type: 'SET_ACTIVE_ITEM', payload: {activeItem: null} })
    : dispatch({ type: 'SET_ACTIVE_ITEM', payload: {activeItem: name} })
}
export const setSubscriptionFocus = (e,{name}) => (dispatch, getState) => {
  dispatch(populateSubscriptions(e,{name}))
  dispatch({type: 'SET_SUBSCRIPTION_FOCUS', name})
}
