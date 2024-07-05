import React from 'react';
import './index.css';
import Home from './pages/homePage.jsx';
import About from './pages/aboutPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './Components/Team/Team.jsx';

// import Community from './pages/communityPage.jsx';
// import Contact from './pages/contactPage.jsx';


function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />

        {/* <Route path='/community' element={<Community />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
