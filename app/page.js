import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Slider from './components/Slider'
import OurService from './components/OurService'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Map from './components/Map'
import Special from './components/Special'

const page = () => {
  return (
    <div>
      
      <Header/>
      <Navbar/>
      <Slider/>
      <OurService/>
      <Special/>
      <Gallery/>
      <Contact/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default page