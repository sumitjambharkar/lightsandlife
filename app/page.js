import React from 'react'
import Slider from './components/Slider'
import OurService from './components/OurService'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Map from './components/Map'
import Special from './components/Special'

const page = () => {
  return (
    <div>
      <Slider/>
      <OurService/>
      <Special/>
      <Gallery/>
      <Contact/>
      <Map/>
    </div>
  )
}

export default page