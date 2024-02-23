import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import NoteForm from './pages/NoteForm'


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<NoteForm />} />
      </Routes>
    </>
  )
}

export default App
