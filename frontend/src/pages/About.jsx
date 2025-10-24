import React from 'react'
import HeroSection from '../constants/HeroSection'
import AboutSection from '../components/AboutComponents/AboutSection'
import CEOMessage from '../components/AboutComponents/CEOMessage'
import Team from '../components/AboutComponents/Team'

const About = () => {
  return (
    <div>
        <HeroSection title="About Us" description="This is a sample description for About Page" />
        <AboutSection />
        <CEOMessage />
        <Team />
    </div>
  )
}

export default About