import React from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'
import Navbar from './components/navbar'

/**
 * @components custom components
 */
import Topbar from './components/topbar'

export default function App() {
  return (
    <div className='app__container'>
      <Topbar/>
      <BrowserRouter>
      <Navbar/>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
