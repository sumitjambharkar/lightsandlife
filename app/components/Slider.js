"use client"
import { useState,useEffect } from 'react';
import "./Slider.css";

const courses = [
    {
      title: 'TECHNICAL LIGHTS',
      description: 'Your Life Easier',
      image: 'https://res.cloudinary.com/clennation/image/upload/v1713859550/ref_01_te75i6.jpg', 
    },
    {
      title: 'DECORATIVE LIGHTS',
      description: 'Bring Magic To Home',
      image: 'https://res.cloudinary.com/clennation/image/upload/v1713859547/IMG-20200928-WA0013_vofx9r.jpg',
    },
    {
      title: 'FIBER OPTIC LIGHTS',
      description: 'Feel More On Home',
      image: 'https://res.cloudinary.com/clennation/image/upload/v1713859544/bann_cvs5k6.jpg',
    },
  ];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); 
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]); 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  return (
    <div className="course-slider">
      {courses.map((course, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${course.image})` }}
        >
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>Prev</button>
      <button className="next" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
