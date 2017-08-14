import { combineReducers } from 'redux'
import singleGist from './singleGist'
import userGists from './userGists'

const rootReducer = combineReducers({
  userGists,
  singleGist
})

export default rootReducer