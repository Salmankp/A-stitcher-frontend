import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
