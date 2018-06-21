import { CLEAR_STATE, ADD_SUBSCRIPTION, FETCH_SUBSCRIPTIONS, NEW_SUBSCRIPTION, POPULATE_SUBSCRIPTION } from './types';
import Parser from 'rss-parser'
let parser = new Parser()
// console.log(Parser, parser)

export const fetchSubscriptions = () => (dispatch, getState) => {
  let token = localStorage.getItem('token')
  fetch('http://localhost:4000/subscriptions', {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then( (subscriptions) => {
      dispatch({
        type: FETCH_SUBSCRIPTIONS,
        subscriptions
      })
    });
};

export const populateSubscriptions = (subscriptionID) => (dispatch, getState) => {
  const subscription = getState().subscriptions[subscriptionID]
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  parser.parseURL(CORS_PROXY + subscription.feedUrl)
  .then(feed => {
    feed.items = feed.items.filter((item) => (item.content.length > 0 && item.title.length > 0 && !getState().subscriptions[subscriptionID].items.hasOwnProperty(item.guid)));
    feed.items = feed.items.map((item) => {
      if (item['content:encoded']){
        item.encodedContent = item['content:encoded'];
        delete item['content:encoded']

      }
      item.read = false
      return item
    })
    console.log(feed.items)
    dispatch({
      type: POPULATE_SUBSCRIPTION,
      subscriptionID,
      feed
    })
  })
}

export const addSubscription = (name, feedUrl) => (dispatch, getState) => {
  console.log(name, feedUrl)
  let user_id = localStorage.getItem('user_id')
  let token = localStorage.getItem('token')
  fetch('http://localhost:4000/subscriptions', {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({feedUrl: feedUrl, name: name})
    })
    .then(res => res.json()).then( (subscription) => {
      console.log(subscription)
      dispatch({
        type: ADD_SUBSCRIPTION,
        subscription
      })
    });
};
