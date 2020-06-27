import {
    OPEN_ALERT,
    CLOSE_ALERT
  } from '../actions'
  
  const alertOpen = (state = {state:'',id:''}, action) => {
    switch (action.type) {
      case OPEN_ALERT:
        return {state:'show',id:action.id}
      case CLOSE_ALERT:
        return {state:'',id:''}
      default:
        return state
    }
  }
  
  export default alertOpen
  