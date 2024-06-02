import React from 'react';
import './index.css';
import Home from './pages/homePage.jsx';
import About from './pages/aboutPage.jsx';
import Service from './pages/servicePage.jsx';

import Contact from './pages/contactPage.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
