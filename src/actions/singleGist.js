import api from '../helpers/api';
import {
    FETCHED_SINGLE_GIST,
    GIST_FETCH_START,
    GIST_FETCH_FAILED
} from './types';

export const getSingleGist = (gistID) => {
  return dispatch => {
    dispatch({ type: GIST_FETCH_START });
    api.get(`gists/${gistID}`)
    .then((response) => {
      if(response.ok) {
        dispatch({ type: FETCHED_SINGLE_GIST, data: response.data, gistID: gistID });
      } else {
        let err = response.status === 404 ? 'Gist not found.' : response.problem;
        dispatch({ type: GIST_FETCH_FAILED, error: err, gistID: gistID });
      }
    })
  }
}