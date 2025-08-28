import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FloatingTokenRates from './components/FloatingTokenRates';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cosmic overflow-x-hidden">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AnimatePresence>
        <FloatingTokenRates />
      </div>
    </Router>
  );
}

export default App;