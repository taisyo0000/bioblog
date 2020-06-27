import { combineReducers } from 'redux'

import formOpen from './formOpen'
import diaries from './diaries'
import alertOpen from './alertOpen'

export default combineReducers({
  formOpen,
  diaries,
  alertOpen
})
