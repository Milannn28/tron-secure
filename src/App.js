import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
