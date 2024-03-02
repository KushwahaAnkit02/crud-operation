import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Updatedata from './components/Updatedata'
import CreateUser from './components/CreateUser'
import Navbar from './components/Navbar'
import ShowData from './components/ShowData'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Navigate to="/" />} />
        <Route path="/" element={<ShowData />} />
        <Route path="/update-data/:id" element={<Updatedata />} />
        <Route path="/create-user" element={<CreateUser />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

