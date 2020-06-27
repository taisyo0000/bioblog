import {
    OPEN_DIARYFORM,
    CLOSE_DIARYFORM
  } from '../actions'
  
  const formOpen = (state = 'false', action) => {
    switch (action.type) {
      case OPEN_DIARYFORM:
        return true
      case CLOSE_DIARYFORM:
        return false
      default:
        return state
    }
  }
  
  export default formOpen
  