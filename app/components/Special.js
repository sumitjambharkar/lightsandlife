"use client"
import React, { useRef, useState } from 'react';
import "./Special.css"

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
<p>Donec non nibh in dui sagittis finibus. Duis suscipit</p>
        
        </div>
        <div className='wrapper'
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        >
          <div className='item'>
            <img className='item_img' src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg" alt="" />
          </div>
          <div className='item'>
         <img className='item_img'  src="https://cityfurnish.com/blog/wp-content/uploads/2023/12/living-room-with-large-clock-green-peacock-wall-min.jpg" alt="" />
          </div>
          <div className='item'>
       <img className='item_img' src="https://cuttingedgeds.com/wp-content/uploads/2019/12/Luxury-Homes-Interior-Design-1-1.jpg" alt="" />
          </div>
          <div className='item'>
            <img className='item_img' src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/06/Open-home-with-mid-century-modern-interior-design-2-scaled.jpeg" alt="" />
          </div>
          <div className='item'>
        <img className='item_img' src="https://www.decorpot.com/images/1482092601an-exclusive-guide-to-2bhk-home-interior-designs.jpg" alt="" />
          </div>
          <div className='item'>
            <img className='item_img' src="https://kraftivo.in/magazine/wp-content/uploads/2020-Modern-Space-scaled.jpg" alt="" />
          </div>
          <div className='item'>
         <img className='item_img' src="https://www.decorpot.com/images/1277726740mixing-styles-for-unique-home-deep-dive-into-interior-design.jpg" alt="" />
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Special