import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import Register from './components/pages/Register'
import Apps from './AppDetale';
import CreatePart from './components/CreatePart';
import AppService from './AppService';
import CreateService from './components/createService';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/parts' element={<Apps/>} />
        <Route path='/services' element={<AppService/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/createPart' element={<CreatePart/>} />
        <Route path='/createService' element={<CreateService/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
