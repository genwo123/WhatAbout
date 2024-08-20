import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './JS/Navbar';
import Home from './JS/Home';
import AfterMovingIn from './JS/AfterMovingIn';
import BeforMovingIn from './JS/BeforMovingIn';  // BeforMovingIn 컴포넌트 임포트
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/after-moving-in" element={<AfterMovingIn />} />
          <Route path="/before-moving-in" element={<BeforMovingIn />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
