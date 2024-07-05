import React from 'react'
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer';
// import Login from '../Components/Login/Login';
import Contact from '../Components/Contact/contact'
const contactPage = () => {
  return (
    <div>
        <Navbar/>
        <Contact/>
        {/* <Login/> */}
        <Footer/>
    </div>
  )
}

export default contactPage