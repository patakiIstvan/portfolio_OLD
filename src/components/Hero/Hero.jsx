import React from 'react';

function Hero({ shirtColor }) {
  return (
    <section id="home" className="hero section">
      <div className="hero__container">
        <div className="left">
          <h1>Hey, I'm Pisti!</h1>
          <p>I'm a front-end developer, a huge science and music enthusiastic.</p>
          <a href="https://patakiistvan.netlify.app">My Projects</a>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img className="img__human" src="/assets/images/profilePicLong.jpg" alt="A pic of a human, who is watching deep into your soul." />
            <img className="img__shirt" style={{ filter: `hue-rotate(${String(shirtColor.hue)}deg) saturate(${String(shirtColor.sat)}) brightness(${String(shirtColor.br)})` }} src="/assets/images/ruha.png" alt="A pic of of the human's shirt. It looks cool." />
          </div>
        </div>
      </div>

      <div class="custom-shape-divider-bottom-1640210528">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div>

    </section>
  );
}

export default Hero;
