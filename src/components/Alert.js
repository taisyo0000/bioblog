import React, { useContext, useState } from 'react'

import {
  CLOSE_ALERT,
  DELETE_DIARY
} from '../actions'
import AppContext from '../contexts/AppContext'
import '../asset/font.css'

const fontStyle2 = {fontFamily:"PixelMplus12-Regular"}

const Alert = () => {
  const { state, dispatch } = useContext(AppContext)
  const [password, setPassword] = useState('')
  const handleClickDeleteButton = () => {
    const targetData = state.diaries.filter(diary => diary.id === state.alertOpen.id)
    if (targetData[0].password===password) {
      dispatch({ type: DELETE_DIARY, id: state.alertOpen.id})
      window.alert('削除されました')
      dispatch({ type: CLOSE_ALERT})
    } else {
      window.alert('削除パスワードが異なります')
      dispatch({ type: CLOSE_ALERT})
    }
  }

  return (
    <>
      <div
        className={'modal fade ' + state.alertOpen.state}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        style={{ display: state.alertOpen.state==='show' ?'block' : ''}}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" style={fontStyle2}>記録を本当に削除しても良いですか？</h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="formPassword" style={fontStyle2}>削除パスワードを入力してください</label>
                  <input 
                    className="form-control" 
                    id="formPassword" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    style={fontStyle2}
                    placeholder="例：scdafg"
                    />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={()=>dispatch({ type: CLOSE_ALERT})}>閉じる</button>
              <button type="button" className="btn btn-primary" onClick={handleClickDeleteButton}>削除</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Alert
