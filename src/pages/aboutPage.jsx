import React from 'react'
import About from '../Components/About/about'
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer';

const aboutPage = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Footer/>
    </div>
  )
}

export default aboutPage