import React, { useContext, useState } from 'react'

import {
  CLOSE_DIARYFORM,
  CREATE_DIARY
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'
import '../asset/font.css'
import { db } from '../Firebase'

const fontStyle = {fontFamily:"PixelMplus12-Regular", color:"white"}
const fontStyle2 = {fontFamily:"PixelMplus12-Regular"}
const fontStyle3 = {fontFamily:"PixelMplus12-Bold", color:"white"}
const InputArea = {fontFamily:"PixelMplus12-Regular",color:"white",backgroundColor:"transparent"}

const DiaryForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [body, setBody] = useState('')
  const [password, setPassword] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: CREATE_DIARY,
      body,
      password,
      createdAt: timeCurrentIso8601()
    })

    dispatch({type: CLOSE_DIARYFORM})
  }

  const unCreatable = body === ''

  return (
    <>
      <h4 className="text-center" style={fontStyle}>taisyoの記録</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formDiaryBody" style={fontStyle3}>記録をつける</label>
          <textarea 
            className="form-control" 
            id="formDiaryBody" 
            rows="10" 
            value={body} 
            onChange={e => setBody(e.target.value)} 
            style={InputArea}
            placeholder="記録を記入"
            />
        </div>
        <div className="form-group">
          <label htmlFor="formPassword" style={fontStyle3}>削除パスワード</label>
          <input 
            className="form-control" 
            id="formPassword" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            style={InputArea}
            placeholder="例：scdafg"
            />
        </div>
        <div className="text-center">
        <button className="btn btn-outline-light" onClick={addEvent} disabled={unCreatable} style={fontStyle2}>記録する</button>
        </div>
      </form>
      <button className="btn btn-outline-light" style={fontStyle2} onClick={()=>{dispatch({type: CLOSE_DIARYFORM})}} >戻る</button>
    </>
  )
}

export default DiaryForm
