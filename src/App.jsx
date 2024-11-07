import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Board from './Board'
import Add from "./Add"


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Board />}></Route>
        <Route path='/add-user' element={<Add />}></Route>
        <Route path='/edit-user/:id' element={<Add />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
