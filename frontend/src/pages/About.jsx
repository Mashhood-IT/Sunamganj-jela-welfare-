import React from 'react'
import AboutHero from '../components/AboutComponents/AboutHero'
import AboutSection from '../components/AboutComponents/AboutSection'
import CEOMessage from '../components/AboutComponents/CEOMessage'
import Team from '../components/AboutComponents/Team'

const About = () => {
  return (
    <div>
        <AboutHero />
        <AboutSection />
        <CEOMessage />
        <Team />
    </div>
  )
}

export default About