import React from 'react';
import './index.css';
import Home from './pages/homePage.jsx';
import About from './pages/aboutPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './pages/teamPage.jsx';

// import Community from './pages/communityPage.jsx';
// import Contact from './pages/contactPage.jsx';
// import Login from './pages/loginPage.jsx;

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />

        {/* <Route path='/community' element={<Community />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
