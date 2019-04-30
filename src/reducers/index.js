import { combineReducers } from 'redux'
import user from './user'

const rootReducer = combineReducers({
  userInformation: user
})

export default rootReducer