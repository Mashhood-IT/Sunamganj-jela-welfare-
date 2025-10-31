import React from 'react'
import Hero from './components/HomeComponents/Hero'
import About from './components/HomeComponents/About'
import FAQ from './components/HomeComponents/FAQ'
import Solution from './components/HomeComponents/Solution'
import MissionVision from './components/HomeComponents/MissionVision'
import Impact from './components/HomeComponents/Impact'
import Services from './components/HomeComponents/Services'
import GetInvolved from './components/HomeComponents/GetInvolved'
import Future from './components/HomeComponents/Future'

const Home = () => {
  return (
    <div>
    <Hero />
    <About />
    <Services />
    <MissionVision />
    <Impact />
    <Solution />
    <GetInvolved />
    <Future />
    <FAQ />
    </div>
  )
}

export default Home