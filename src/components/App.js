import React, { useEffect, useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Diaries from './Diaries'
import DiaryForm from './DiaryForm'
import Alert from './Alert'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'
import { UPDATE_DIARY } from '../actions'

import image from "../asset/bio-background.jpg"
import { db } from '../Firebase'
import { useDocument } from "react-firebase-hooks/firestore"

// const APP_KEY = 'appWithRedux'

const backgroundStyle = {backgroundImage: `url(${image})`,backgroundSize: 'cover',width: '100vw',height: '100vh'}

const App = () => {
  // const appState = localStorage.getItem(APP_KEY)
  const [values, loading, error] = useDocument(db.collection('state').doc('e853GJj2zgmlCbtQ08v9'),{
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const initialState = {
    formOpen: false,
    alertOpen: {state:'',id:''},
    diaries: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if(values) {dispatch({ type: UPDATE_DIARY, diaries:values.data().diaries})}
  }, [values])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid" style={backgroundStyle}>
        {loading ? <h1 key="error-label">Loading</h1>:null}
        {error ? <h1 key="error-label">{`Error: ${error.message}`}</h1>:null}
        {values ? state.formOpen ? <DiaryForm />:<Diaries />:null}
        <Alert/>
      </div>
    </AppContext.Provider>
  )
}

export default App
