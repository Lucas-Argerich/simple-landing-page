import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './app.scss'
import Disclaimer from './pages/disclaimer'
import Landing from './pages/landing'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='disclaimer' element={<Disclaimer />} />
      </Routes>
    </div>
  )
}
