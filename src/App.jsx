import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/COntact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What we Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Life" />
        <Campus />
        <Title subTitle="Testimonials" title="What Our Students Say" />
        <Testimonials />
        <Title subTitle="Contact US" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App