import React from 'react'
import '../../app.scss'
// components
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'

//import bg from '../../assets/images/heroBg.png';


// const body = document.querySelector("body");
// const colorSet = [
//   [206, 10, 0.4],
//   [228, 5, 0.4],
//   [360, 5, 0.4],
//   [58, 5, 0.6]
// ];
// const colorRange = 360 - colorSet[0][0] + colorSet[colorSet.length - 1][0];

// const changeColor = (e) => {
//   const shirt = document.querySelector('.img__shirt');
//   const mouseXPercent = e.screenX / body.clientWidth;
//   const hueExtra = colorRange * mouseXPercent;
//   const placeInHue = (colorRange + hueExtra) % 360;

//   for (let i = 1; i < colorSet.length; i++) {
//     const setI = colorSet[i]
//     if (placeInHue >= colorSet[i - 1][0] % 360 && placeInHue <= setI[0]) {
//       const setPrev = colorSet[i - 1];
//       const placeBetween = (placeInHue - setPrev[0] % 360) / (setI[0] - setPrev[0] % 360);
//       const setHue = setPrev[0] % 360 + (setI[0] - setPrev[0] % 360) * placeBetween;
//       const setSat = setPrev[1] + (setI[1] - setPrev[1]) * placeBetween;
//       const setBr = setPrev[2] + (setI[2] - setPrev[2]) * placeBetween;
//       shirt.style.filter = `hue-rotate(${String(setHue)}deg) saturate(${String(setSat)}) brightness(${String(setBr)})`;
//       break
//     }
//   }
// }


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
