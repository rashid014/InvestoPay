import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import './App.css'


function App() {

  return (
    
       <Router>
    <Routes>
    <Route exact path="/"  element={<Home/>}/>
  
    
    </Routes>
   </Router>
 
  
  )
}

export default App