import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'
import Background from './components/background'
import NavBar from './components/navBar'
import Disclaimer from './pages/disclaimer'
import Landing from './pages/landing'

export default function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Background />
    <NavBar />
      <Routes>
        <Route path='*' element={<Landing />} />
        <Route path='disclaimer' element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}
