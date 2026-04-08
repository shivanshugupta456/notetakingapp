import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Createnote from './pages/Createnote'

function App() {
  return (
    <div className="app-shell flex min-h-screen flex-col text-white">
      <Navbar/>

      <main className="container mx-auto flex-1 px-4 py-6">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Createnote />} />
      </Routes>
      </main>

      <Footer/>
    </div>
  )
}

export default App
