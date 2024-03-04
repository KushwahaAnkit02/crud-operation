import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Updatedata from './components/Updatedata'
import CreateUser from './components/CreateUser'
import Navbar from './components/Navbar'
import ShowData from './components/ShowData'

const App = () => {
  const [mode, setMode] = useState(true)
  const [name, setName] = useState('Dark Mode')
  const [className, setClassName] = useState()

  const changeMode = () => {
    setMode(!mode)
    if (mode === true) {
      document.getElementById('root').style.backgroundColor = 'black'
      document.getElementById('root').style.color = 'white'
      setClassName('text-light')
      setName('Light Mode')
    } else {
      document.getElementById('root').style.backgroundColor = 'white'
      document.getElementById('root').style.color = 'black'
      setName('Dark Mode')
      setClassName('text-dark')
    }
  }

  return (
    <BrowserRouter>
      <Navbar changeMode={changeMode}
        name={name} />
      <Routes>
        <Route path="/users" element={<Navigate to="/" />} />
        <Route path="/" element={<ShowData
          className={className}

        />} />
        <Route path="/update-data/:id" element={<Updatedata

        />} />
        <Route path="/create-user" element={<CreateUser

        />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

