import React from 'react'
import '../../app.scss'
// components
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'

function Home({ shirtColor }) {
  // usestate

  return (
    // <main style={{ backgroundImage: "url(" + bg + ")" }} class="main section" >
    <main className="main relative-section">
      <Hero shirtColor={shirtColor} />
      <About />
      <Projects />
      <Footer />
    </main >
  )
}

export default Home
