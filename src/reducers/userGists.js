import {
  FETCHED_GISTS,
  USER_FETCH_FAILED,
  USER_FETCH_START,
} from '../actions/types'

const userGists = (state = {
  username: undefined,
  data: [],
  fetching: false,
  error: undefined
}, action) => {
  switch (action.type) {
    case USER_FETCH_START:
      return { 
        ...state, 
        username: undefined,
        fetching: true,
        error: undefined,
        data: []
      }
    case FETCHED_GISTS:
      return { 
        ...state, 
        username: action.username,
        fetching: false,
        error: undefined,
        data: action.data 
      }
    case USER_FETCH_FAILED:
      return { 
        ...state, 
        username: action.username,
        fetching: false,
        error: action.error,
        data: []
      }
    default:
      return state
  }
}

export default userGists