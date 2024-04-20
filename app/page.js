import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Slider from './components/Slider'
import OurService from './components/OurService'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const page = () => {
  return (
    <div>
      
      <Header/>
      <Navbar/>
      <Slider/>
      <OurService/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default page