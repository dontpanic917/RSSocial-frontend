import { FETCH_SUBSCRIPTIONS, NEW_SUBSCRIPTION, POPULATE_SUBSCRIPTION } from './types';
import Parser from 'rss-parser'
let parser = new Parser()
console.log(Parser, parser)

export const fetchSubscriptions = () => (dispatch) => {
  let user_id = localStorage.getItem('user_id')
  let token = localStorage.getItem('token')
  fetch('http://localhost:4000/subscriptions', {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then( (subscriptions) =>
      dispatch({
        type: FETCH_SUBSCRIPTIONS,
        subscriptions
      })
    );
};

export const populateSubscriptions = (e, { name }) => (dispatch, getState) => {
  const subscription = getState().subscriptions[name]
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  parser.parseURL(CORS_PROXY + subscription.feedUrl)
  .then(feed =>
    dispatch({
      type: POPULATE_SUBSCRIPTION,
      name,
      feed
    })
  )
}
