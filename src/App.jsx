import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

import TrippyGsap from './components/TrippyGsap'
import TrippyHeader from './components/TrippyHeader'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrippyGsap />} />
        <Route path="/scroll" element={<TrippyHeader />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
