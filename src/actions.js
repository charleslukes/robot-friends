/**
 * REDUX
 * Action => Reducer => Store => React-App
 * 
 * Three Principles of redux
 * 1. Single Source of truth
 * 2. State is read only
 * 3. Changes using pure functions
 */

 import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_ROBOT_PENDING});
  console.log('fired')
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data}))
      .catch(err => dispatch({ type: REQUEST_ROBOT_FAILED, payload: err}))
}