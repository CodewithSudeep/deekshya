import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar'

/**
 * @components custom components
 */
import Topbar from './components/topbar'
import Home from './pages/home'

export default function App() {
  return (
    <div className='app__container'>
      <Topbar/>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
