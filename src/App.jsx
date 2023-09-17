import React, { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Slidebar from './components/Slidebar/Slidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './app.scss';

const initialColor = {
  hue: 206,
  sat: 10,
  br: 0.4
}
const colorSet = [
  [206, 10, 0.4],
  [228, 5, 0.4],
  [360, 5, 0.4],
  [58, 5, 0.6]
];
const colorRange = 360 - colorSet[0][0] + colorSet[colorSet.length - 1][0];


function App() {
  //useState
  const [navMenu, setNavMenu] = useState(false)
  const [shirtColor, setShirtColor] = useState(initialColor);

  const toggleNav = () => {
    setNavMenu(!navMenu)
  }

  const changeColor = (e) => {
    const mouseXPercent = e.screenX / document.body.clientWidth;
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
        setShirtColor({
          hue: setHue,
          sat: setSat,
          br: setBr
        })
        break
      }
    }
  }


  return (
    <div className="App" onMouseMove={changeColor}>
      <Router>
        <Slidebar navMenu={navMenu} toggleNav={toggleNav} />
        <Navbar toggleNav={toggleNav} />
        <Routes>
          <Route path="/" element={<Home shirtColor={shirtColor} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
