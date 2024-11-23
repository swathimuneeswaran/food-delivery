import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar is placed outside Routes to make it common */}
      <Navbar />
      <Routes>
        {/* Define routes for specific components */}
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
