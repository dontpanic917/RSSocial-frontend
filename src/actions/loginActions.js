import { LOGIN } from './types';

export const login = (username, password, history) => dispatch => {
  fetch('http://localhost:4000/login', {
    method: 'POST',
    body:
      JSON.stringify({username, password})
    ,
    headers: {
      'Content-Type': 'application/json',
      'accepts': 'application/json',
    }
  })
  .then(res => res.json())
  .then(userHash => {
    if(userHash.token){
      localStorage.setItem('token', userHash.token)
      localStorage.setItem('user_id', userHash.user_id)
      localStorage.setItem('username', userHash.username)
      dispatch({type: LOGIN, payload: {success: "connected"}})
      history.push('/feeds')
    } else {
      dispatch({
        type: LOGIN,
        payload: {errors: "Mistake"}
      })
    }
  })
}
