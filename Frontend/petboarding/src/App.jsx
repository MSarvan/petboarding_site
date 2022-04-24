import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Entity } from './Components/Entity'
import { Createentity } from './Components/CreateEntity'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listing/:id' element={<Entity/>}/>
        <Route path='/listing/create' element={<Createentity/>}/>
      </Routes>
    </div>
  )
}

export default App
