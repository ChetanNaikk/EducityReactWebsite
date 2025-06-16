import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
          <h1>We Ensure better education for a better world</h1>
          <p>We are a non-profit organization dedicated to providing quality education to underprivileged children around the world. Our mission is to empower every child with the knowledge and skills they need to succeed.</p>
          <button className='btn'>Learn More <img src={arrow} alt="arrow" /></button>
        </div>
    </div>
  )
}

export default Hero