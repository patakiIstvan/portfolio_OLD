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

function App() {

  const [navMenu, setNavMenu] = useState(false)

  const toggleNav = () => {
    setNavMenu(!navMenu)
  }


  return (
    <div className="App">
      <Router>
        <Slidebar navMenu={navMenu} toggleNav={toggleNav} />
        <Navbar toggleNav={toggleNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
