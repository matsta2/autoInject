import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Part from './components/pages/Part';
import Services from './components/pages/Services';
import LogIn from './components/pages/LogIn';
import Apps from './Apps';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/parts' element={<Apps/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/login' element={<LogIn/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
