import api from '../helpers/api';
import {
    FETCHED_GISTS,
    USER_FETCH_FAILED,
    USER_FETCH_START
} from './types';

export const getUserGists = (username) => {
  return dispatch => {
    dispatch({ type: USER_FETCH_START });
    api.get(`users/${username}/gists`)
    .then(response => {
      if(response.ok) {
        if(response.data.length > 0) {
          dispatch({ type: FETCHED_GISTS, data: response.data, username: username });
        } else {
          dispatch({ type: USER_FETCH_FAILED, error: 'User has 0 public gists.', username: username });
        }
      } else {
        let err = response.status === 404 ? 'User not found.' : response.problem;
        dispatch({ type: USER_FETCH_FAILED, error: err, username: username });
      }
    })
  }
}