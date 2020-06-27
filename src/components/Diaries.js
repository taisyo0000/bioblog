import React, { useContext } from 'react'

import Diary from './Diary'
import AppContext from '../contexts/AppContext'
import {
  OPEN_DIARYFORM,
} from '../actions'

import '../asset/font.css'

const fontStyle = {fontFamily:"PixelMplus12-Regular", color:"white"}

const Diaries = () => {
  const { state, dispatch } = useContext(AppContext)
  // console.log(state)

  return (
    <>
      <h4 className="text-center" style={fontStyle}>taisyoの記録</h4>
      <button className="btn btn-outline-light" onClick={()=>{dispatch({type: OPEN_DIARYFORM})}} style={fontStyle}>記録をつける</button>
      <h4>記録一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={fontStyle}>日時</th>
            <th style={fontStyle}>本文</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.diaries.map((diary, index) => (<Diary key={index} diary={diary} />))}
        </tbody>
      </table>
    </>
  )
}

export default Diaries
