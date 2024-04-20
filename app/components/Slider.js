"use client"
import { useState } from 'react';
import "./Slider.css"

const courses = [
    {
      title: 'TECHNICAL LIGHTS',
      description: 'Your Life Easier',
      image: 'https://www.shutterstock.com/shutterstock/photos/1913774386/display_1500/stock-vector-colorful-template-banner-with-gradient-color-design-with-liquid-shape-1913774386.jpg',
    },
    {
      title: 'DECORATIVE LIGHTS',
      description: 'Bring Magic To Home',
      image: 'https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161_640.jpg',
    },
    {
      title: 'FIBER OPTIC LIGHTS',
      description: 'Feel More On Home',
      image: 'https://lightsandlife.in/images/bann.jpg',
    },
  ];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
