import React from 'react'
import Home from '../Components/Home/home'
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer';

const homePage = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default homePage