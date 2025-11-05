import React from 'react'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Testimonial from '../components/Home/Testimonial'
import CallToAction from '../components/Home/CallToAction'
import Footer from '../components/Home/footer'


const Home = () => {
  return (
    <div>
        <h1>
          <Banner/>
          <Hero/>
          <Features/>
          <Testimonial/>
          <CallToAction/>
          <Footer />
        </h1>
    </div>
  )
}

export default Home