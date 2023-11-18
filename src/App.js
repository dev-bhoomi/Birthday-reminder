import './App.css';
import React from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Componets/Home';
import Empdetails from './Componets/Empdetails';
import Empbirthday from './Componets/Empbirthday';
import Error from './Componets/Error';



const App = () => {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
        <Route path="/empdetails" element={<Empdetails />} exact/>      
        <Route path="/empbirthday" element={<Empbirthday />} exact/>  
        <Route path="*" element={<Error />} />
    </Routes>
  </HashRouter >
    </>
      
  )
}

export default App