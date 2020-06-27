import {
  CREATE_DIARY,
  DELETE_ALL_DIARIES,
  DELETE_DIARY,
  UPDATE_DIARY
} from '../actions'
import { db } from '../Firebase'

const diaries = (state = [], action) => {
  switch(action.type) {
    case CREATE_DIARY:
      const diary = { body: action.body, createdAt: action.createdAt, password:action.password }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      db.collection("state").doc("e853GJj2zgmlCbtQ08v9").set({diaries:[...state, { id, ...diary }]})
      return [...state, { id, ...diary }]
    case DELETE_DIARY:
      db.collection("state").doc("e853GJj2zgmlCbtQ08v9").set({diaries:state.filter(diary => diary.id !== action.id)})
      return state.filter(diary => diary.id !== action.id)
    case UPDATE_DIARY:
      return action.diaries
    case DELETE_ALL_DIARIES:
      return []
    default:
      return state
  }
}

export default diaries
