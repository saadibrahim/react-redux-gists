import {
  FETCHED_SINGLE_GIST,
  GIST_FETCH_START,
  GIST_FETCH_FAILED
} from '../actions/types'

const singleGist = (state = {
  gistID: undefined,
  data: {},
  fetching: false,
  error: undefined
}, action) => {
  switch (action.type) {
    case GIST_FETCH_START:
      return { 
        ...state, 
        gistID: undefined,
        fetching: true,
        error: undefined,
        data: {}
      }
    case FETCHED_SINGLE_GIST:
      return { 
        ...state, 
        gistID: action.gistID,
        data: action.data,
        fetching: false
      }
    case GIST_FETCH_FAILED:
      return Object.assign({}, state, {
        gistID: action.gistID,
        error: action.error,
        fetching: false,
        data: {}
      })
    default:
      return state
  }
}

export default singleGist