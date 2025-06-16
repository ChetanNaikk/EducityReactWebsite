import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a message</h3>
        <p>We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
        <ul>
            <li><img src={mail_icon} alt="Mail Icon" /> Contact@Student.com</li>
            <li><img src={phone_icon} alt="Phone Icon" /> +1 (555) 123-4567</li>
            <li><img src={location_icon} alt="Location Icon" /> 1234 Student Lane, City, State, 12345</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Your Name' required />
          <label>Your Phone</label>
          <input type="tel" name='phone' placeholder='Your Phone' required />
          <label>Your Email</label>
          <input type="email" name='email' placeholder='Your Email' required />
          <label>Your Message</label>
          <textarea name='message' placeholder='Your Message' rows="6" required></textarea>
          <button type="submit" className='btn dark-btn'>Submit Now</button>
        </form>
        </div>
    </div>
  )
}

export default Contact