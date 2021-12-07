import React from 'react'
import '../../app.scss'
import bg from '../../assets/images/heroBg.png';

function Home() {
  return (
    // <main style={{ backgroundImage: "url(" + bg + ")" }} class="main section" >
    <main className="main section" >
      <section className="hero">
        <div className="left">
          <h1>Hey, I'm Pisti!</h1>
          <p>I'm a front-end developer, a huge science and music enthusiastic.</p>
          <a href="https://www.google.com">My Projects</a>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src="/assets/images/profilePicLong.jpg" alt="A pic of Pisti, who is watching deep into your soul." />
          </div>
        </div>
      </section>
    </main >
  )
}

export default Home
