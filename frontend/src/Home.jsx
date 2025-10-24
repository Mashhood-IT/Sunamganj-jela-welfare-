import React from 'react'
import Hero from './components/HomeComponents/Hero'
import About from './components/HomeComponents/About'
import FAQ from './components/HomeComponents/FAQ'
import Solution from './components/HomeComponents/Solution'

const Home = () => {
  return (
    <div>
    <Hero />
    <About />
    <Solution />
    <FAQ />
    </div>
  )
}

export default Home