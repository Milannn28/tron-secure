import logo from './logo.svg';
import './App.css';
import "@radix-ui/themes/styles.css";

import { Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import { Theme } from "@radix-ui/themes";
import Verification from './pages/Verification';


function App() {
  return (
    <Theme>

    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wallet-verification" element={<Verification />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </Theme>
  );
}

export default App;
