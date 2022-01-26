import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Home />} />
        <Route path="/mail-box" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;