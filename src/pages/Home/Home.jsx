import React from 'react'
import '../../app.scss'
//import bg from '../../assets/images/heroBg.png';
const body = document.querySelector("body");
const colorSet = [
  [206, 10, 0.4],
  [228, 5, 0.4],
  [360, 5, 0.4],
  [58, 5, 0.6]
];
const colorRange = 360 - colorSet[0][0] + colorSet[colorSet.length - 1][0];

const changeColor = (e) => {
  const shirt = document.querySelector('.img__shirt');
  const mouseXPercent = e.screenX / body.clientWidth;
  const hueExtra = colorRange * mouseXPercent;
  const placeInHue = (colorRange + hueExtra) % 360;

  for (let i = 1; i < colorSet.length; i++) {
    const setI = colorSet[i]
    if (placeInHue >= colorSet[i - 1][0] % 360 && placeInHue <= setI[0]) {
      const setPrev = colorSet[i - 1];
      const placeBetween = (placeInHue - setPrev[0] % 360) / (setI[0] - setPrev[0] % 360);
      const setHue = setPrev[0] % 360 + (setI[0] - setPrev[0] % 360) * placeBetween;
      const setSat = setPrev[1] + (setI[1] - setPrev[1]) * placeBetween;
      const setBr = setPrev[2] + (setI[2] - setPrev[2]) * placeBetween;
      shirt.style.filter = `hue-rotate(${String(setHue)}deg) saturate(${String(setSat)}) brightness(${String(setBr)})`;
      break
    }
  }
}


function Home() {
  return (
    // <main style={{ backgroundImage: "url(" + bg + ")" }} class="main section" >
    <main className="main section" onMouseMove={changeColor}>
      <section className="hero">
        <div className="left">
          <h1>Hey, I'm Pisti!</h1>
          <p>I'm a front-end developer, a huge science and music enthusiastic.</p>
          <a href="https://www.google.com">My Projects</a>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img className="img__human" src="/assets/images/profilePicLong.jpg" alt="A pic of a human, who is watching deep into your soul." />
            <img className="img__shirt" src="/assets/images/ruha.png" alt="A pic of of the human's shirt. It looks cool." />
          </div>
        </div>
      </section>
      <section className="about-me">
        <div className="about-me__container">
          <div className="about-me__title">
            <h2 className="about-me__title__text">Things worth sharing</h2>
          </div>
          <img src="https://i.pinimg.com/564x/ca/12/36/ca123649022fb3f369f2ebe07f8bd0e6.jpg" alt="placeholder" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus rerum expedita dolorum voluptatum enim a non, inventore quis nihil ea? Nobis dignissimos commodi, maxime corrupti tempore autem eius ipsam!
            Maiores suscipit labore commodi esse maxime adipisci praesentium quod aperiam aliquam. Illum unde iure, qui, molestiae delectus voluptate nihil, in omnis neque non itaque quam rerum tenetur animi illo quasi?</p>
        </div>
      </section>
    </main >
  )
}

export default Home
