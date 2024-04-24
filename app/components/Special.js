"use client"
import React, { useRef, useState } from 'react';
import "./Special.css"
import image0ne from "../image/01.jpg";
import Image from 'next/image';
import imagetwo from "../image/g9.jpg"
import imagethree from "../image/g5.jpg"
import imagefour from "../image/g10.jpg"
import imagefive from "../image/gautam.jpg"
import imagesix from "../image/g12.jpg"

const Special = () => {

  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - wrapperRef.current.offsetLeft);
    setScrollLeft(wrapperRef.current.scrollLeft);
    document.body.style.cursor = 'move';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed as needed
    wrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'auto';
  };
  
  
  return (
    <>
    <div className='special_heading'>  <h1  >SPECIAL DESIGNS</h1></div>
    <div className='special_section'>

      <div className='slider'>
      
        <div className='permenet'>
         
         <h3>TRENDY DESIGNS</h3>
<p>blending style and functionality to brighten every corner with elegance.





</p>
        
        </div>
        <div className='wrapper'
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        >
          <div className='item'>
            <Image className='item_img' src={image0ne} alt="ff" />
          </div>
          <div className='item'>
            <Image className='item_img' src={imagetwo} alt="ff" />
          </div>
          <div className='item'>
            <Image className='item_img' src={imagethree} alt="ff" />
          </div>
          <div className='item'>
            <Image className='item_img' src={imagefour} alt="ff" />
          </div>
          <div className='item'>
            <Image className='item_img' src={imagefive} alt="ff" />
          </div>
          <div className='item'>
            <Image className='item_img' src={imagesix} alt="ff" />
          </div>
        
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Special