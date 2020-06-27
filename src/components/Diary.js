import React, { useContext } from 'react'

import {
  OPEN_ALERT
} from '../actions'
import AppContext from '../contexts/AppContext'

import '../asset/font.css'

const fontStyle = {fontFamily:"PixelMplus12-Regular", color:"white"}
const bodyStyle = { fontFamily:"PixelMplus12-Regular", color:"white", whiteSpace: 'pre-line' }

const Diary = ({ diary }) => {
  const { dispatch } = useContext(AppContext)
  const id = diary.id
  const handleClickDeleteButton = () => {
    dispatch({ type: OPEN_ALERT, id})
  }

  return ( 
    <>
      <tr>
        <td style={fontStyle}>{diary.createdAt}</td>
        <td style={bodyStyle}>{diary.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton} style={fontStyle}>削除</button></td>
      </tr>
    </>
  )
}

export default Diary
