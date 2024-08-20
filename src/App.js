import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './JS/Navbar';
import Home from './JS/Home';
import AfterMovingIn from './JS/AfterMovingIn';
import BeforMovingIn from './JS/BeforMovingIn';
import AfterFormDetail1 from './JS/AfterMoving/AfterFormDetail1';
import AfterFormDetail2 from './JS/AfterMoving/AfterFormDetail2';
import AfterFormDetail3 from './JS/AfterMoving/AfterFormDetail3';
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
          <Route path="/after-form-1-detail" element={<AfterFormDetail1 />} />
          <Route path="/after-form-2-detail" element={<AfterFormDetail2 />} />
          <Route path="/after-form-3-detail" element={<AfterFormDetail3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
