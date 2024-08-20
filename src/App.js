import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContractForm from './JS/ContractForm';
import Choice from './JS/Choice';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ContractForm />} />
          <Route path="/choice" element={<Choice />} />
        </Routes>
        <div className="button-container">
          <button className="global-button" onClick={() => window.location.href = '/choice'}>
            Next Page
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
