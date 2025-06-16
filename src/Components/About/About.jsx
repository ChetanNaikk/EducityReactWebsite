import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className="about">
     <div className="about-left">
        <img src={about_img} alt="" className='about-img' />     
        <img src={play_icon} alt="" className='play-icon' />
    </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <p>
              Our university is committed to providing a high-quality education that prepares students for success in their careers and lives. With a diverse range of programs and a focus on innovation, we strive to create a learning environment that fosters creativity and critical thinking.
            </p>
            <p>
              Our faculty are experts in their fields, dedicated to mentoring and guiding students through their academic journey. We offer state-of-the-art facilities and resources to support learning and research.
            </p>
            <p>
              Our vibrant campus community encourages collaboration and engagement, providing students with opportunities to grow personally and professionally.
            </p>
            <p>
              Join us at our university, where we empower students to achieve their goals and make a positive impact in the world.                                                          
            </p>
        </div>
    </div>
  )
}

export default About