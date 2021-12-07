import React from 'react'
import './home.scss';
import bg from '../../assets/images/heroBg.png';
// Icons and images

function Home() {
  return (
    // <main style={{ backgroundImage: "url(" + bg + ")" }} class="main section" >
    <main class="main section" >
      <section className="hero">
        <div className="left">
          <h1>Hey, I'm Pisti!</h1>
          <p>I'm a front-end developer, who is huge science and music enthusiastic</p>
          <button><a>My Projects</a></button>
        </div>
        <div className="right">
          <img src="" alt="A pic of Pisti, who is watching deep into your soul." />
        </div>
      </section>
    </main >
  )
}

export default Home
